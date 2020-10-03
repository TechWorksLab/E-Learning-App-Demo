import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import AddStudentModal from '../Components/AddStudentModal';
import {Jumbotron, Button } from "react-bootstrap"
import AppNavbar from "../Components/AppNavbar";
import StudentRosterTable from "../Components/StudentRosterTable";
import "../instructor.css";

export default function InsStudentRoster() {
    const [showStudentModal, setShowStudentModal] = useState(false);
    //importing global state
    const [isAuthenticatedUser, authObj, isNewUserAdded] = useSelector((gState) => [
        gState.isAuthenticatedUser,
        gState.authObj, 
        gState.isNewUserAdded 
    ]);
    
    //using useEffect to track isNewUserAdded changes
    //and show add student modal if successfully logged in
    useEffect( () => {
        if (isNewUserAdded){
            setShowStudentModal(false);
        }
     //if NewUser changes, apply this effect  
    }, [isNewUserAdded]);


    return (
        <React.Fragment> 
            <AppNavbar />
            <Jumbotron className="InsLanding-background">
                <div className="InsLanding-content homepage-content">
                    <h1 className="">POD | Student Roster</h1>
                    <p>
                        View and manage your Student Roster globally and by course!
                    </p>
                    <p className="btngroup">
                        <Button className="InsBtn AddStu primary-button" onClick={() => {setShowStudentModal(true)}}>ADD STUDENTS</Button>
                        <Button className="InsBtn Dashboard primary-button">VIEW DASHBOARD</Button>
                        <AddStudentModal show={showStudentModal} onHide={() => setShowStudentModal(false)} />
                    </p>
                </div>
            </Jumbotron>
            <StudentRosterTable />
        </React.Fragment>
        
        


    )
}