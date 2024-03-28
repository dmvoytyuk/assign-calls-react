import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import data from "../../data.json";
import styles from "./App.module.css";
import TechnicianList from "../TechnicianList/TechnicianList";
import AreaList from "../AreaList/AreaList";
import TechnicianManager from "../TechnicianManager/TechnicianManager";
import AreaManager from "../AreaManager/AreaManager";

const INIT_ACITIVITY_LIST = [];

function App() {
  const [activitiesList, setActivitiesList] = useState(() => {
    if (localStorage.getItem("activities")) {
      return JSON.parse(localStorage.getItem("activities"));
    } else {
      return INIT_ACITIVITY_LIST;
    }
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activitiesList));
  }, [activitiesList]);

  const addArea = ({ area }) => {
    const newArea = {
      id: nanoid(),
      area: area,
      active: false,
      technicians: [],
    };

    if (activitiesList.length === 0) {
      newArea.active = true;
    }

    setActivitiesList((currActivitiesList) => {
      return [...currActivitiesList, newArea];
    });
  };

  const makeAreaActive = (areaID) => {
    if (activeArea.id !== areaID) {
      const newActivityList = activitiesList.map((area) => {
        if (area.id === areaID) {
          area.active = true;
          return area;
        } else {
          area.active = false;
          return area;
        }
      });
      setActivitiesList((currActivitiesList) => newActivityList);
    }
  };

  const deleteArea = (areaID) => {
    const newActivityList = activitiesList.filter((area) => area.id !== areaID);
    if (newActivityList.length > 0) {
      newActivityList[0].active = true;
    }
    setActivitiesList((currActivitiesList) => newActivityList);
  };

  const addTechnician = (name) => {
    const newTechnician = {
      id: nanoid(),
      name: name.name,
      activities: [],
    };

    const activeArea = activitiesList.find((area) => {
      if (area.active) {
        return area;
      }
    });

    const newAreaTechnicianList = [...activeArea.technicians, newTechnician];
    const newActiveArea = { ...activeArea, technicians: newAreaTechnicianList };

    const newActivitiesList = activitiesList.map((area) => {
      if (area.active) {
        return { ...area, ...newActiveArea };
      }
      return area;
    });
    setActivitiesList((currActivitiesList) => newActivitiesList);
  };

  const deleteTechnician = (technicianId) => {
    const newAreaTechnicianList = activeArea.technicians.filter(
      (technician) => technician.id !== technicianId,
    );

    const newActiveArea = {
      ...activeArea,
      technicians: newAreaTechnicianList,
    };

    const newActivitiesList = activitiesList.map((area) => {
      if (area.active) {
        return { ...area, ...newActiveArea };
      }
      return area;
    });

    setActivitiesList((currActivitiesList) => newActivitiesList);
  };

  const addActivity = (activity, technicianId) => {
    const newActivity = {
      id: nanoid(),
      activity: activity,
    };

    const currentTechnician = activeArea.technicians.find(
      (technician) => technicianId === technician.id,
    );

    const currActivitiesList = currentTechnician.activities.map((activity) => {
      return activity;
    });

    const newTechActivitiesList = [...currActivitiesList, newActivity];
    const newTechnician = {
      ...currentTechnician,
      activities: [...newTechActivitiesList],
    };

    const newAreaTechnicianList = activeArea.technicians.map((technician) => {
      if (technician.id === newTechnician.id) {
        return newTechnician;
      } else {
        return technician;
      }
    });

    const newActiveArea = { ...activeArea, technicians: newAreaTechnicianList };

    const newActivitiesList = activitiesList.map((area) => {
      if (area.active) {
        return { ...area, ...newActiveArea };
      }
      return area;
    });

    setActivitiesList((currActivitiesList) => newActivitiesList);
  };

  const deleteActivity = (activityId) => {
    console.log("deleteActivity");
  };

  const activeArea = activitiesList.find((area) => {
    if (area.active) {
      return area;
    }
  });

  return (
    <>
      <section className={styles.areaManager}>
        <AreaManager addArea={addArea} />
        {activitiesList.length > 0 ? (
          <AreaList
            activitiesList={activitiesList}
            activeArea={activeArea}
            makeAreaActive={makeAreaActive}
            deleteArea={deleteArea}
          />
        ) : (
          <p className={styles.appMessage}>*Add some area</p>
        )}
      </section>
      {activitiesList.length > 0 ? (
        <section>
          <TechnicianManager area={activeArea} addTechnician={addTechnician} />
          {activeArea.technicians.length > 0 ? (
            <TechnicianList
              data={activeArea.technicians}
              addActivity={addActivity}
              deleteActivity={deleteActivity}
              deleteTechnician={deleteTechnician}
            />
          ) : (
            <p className={styles.appMessageTechnician}>*Add some technician</p>
          )}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
