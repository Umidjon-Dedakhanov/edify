import React from 'react';
import './Student.css';
import NewStudent from './new-student/NewStudentd';
import { Switch,  NavLink, Route, useRouteMatch } from 'react-router-dom';

const Student = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
       <h1 className="route__title">O'quvchilar</h1>
      <div className="tabs" id="auto">
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/new`}
        >
          O'quvchi qo'shish
        </NavLink>
        
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/personal`}
        >
          Shaxsiy ma'lumot
        </NavLink>
      </div>
      <Switch>
        <Route path={`${path}/new`}>
          <NewStudent />
        </Route>
      </Switch>
    </div>
  )
}

export default Student
