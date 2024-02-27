import React, { Fragment, useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import DateCopy from "../Qualifications/Home/DateQualifi/DateCopy";
import UsePages, { Icones } from "../UsePage/UsePages";
import { handleInputChange } from "../Qualifications/Home/Qualifications";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  return (
    <Fragment>
      {projects.map((form, index) => (
        <div
          key={index}
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable
          className={style.parentPages}>
          <Icones index={index} state={projects} setState={setProjects} />
          <div className={style.qualificBox} key={index}>
            <span className={style.numberQuali}>{index + 1}</span>
            <ParentInput
              forId={`name${index}`}
              label="اسم المشروع"
              paraghrap="إذا كان للمشروع موقع أو صفحة في السوشال ميديا ضع رابطها هنا، (اختياري)">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "name",
                    projects,
                    setProjects
                  )
                }
                id={`name${index}`}
                type="text"
                placeholder="اسم المشروع"
                value={form.name}
              />
            </ParentInput>
            <ParentInput
              forId={`link${index}`}
              label="رابط المشروع"
              paraghrap="إذا كان للمشروع موقع أو صفحة في السوشال ميديا ضع رابطها هنا، (اختياري)">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "link",
                    projects,
                    setProjects
                  )
                }
                id={`link${index}`}
                type="text"
                placeholder="رابط المشروع"
                value={form.link}
              />
            </ParentInput>
            <ParentInput
              forId={`brief${index}`}
              label="نبذة عن المشروع"
              paraghrap="نبذة بسيطة عن المشروع أو المنجز (اختياري).">
              <input
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value,
                    "brief",
                    projects,
                    setProjects
                  )
                }
                id={`brief${index}`}
                type="text"
                placeholder="نبذة عن المشروع"
                value={form.brief}
              />
            </ParentInput>
            <ParentInput label="تاريخ الإنجاز" hedinSpan={false}>
              <DateCopy
                index={index}
                stateDate={projects}
                setStateDate={setProjects}
              />
            </ParentInput>
          </div>
        </div>
      ))}
      <UsePages
        state={projects}
        setState={setProjects}
        nameData={{
          nameState: "projects",
          nameItemObj: ["name", "link", "brief"],
        }}
        b1="أضف مشروع جديد"
        b2="حفظ المشروعات"
      />
    </Fragment>
  );
};

export default Projects;
