import React from 'react';
import { ActionButton } from "./ActionButton";


const SignOutButton = ({action}) => <ActionButton onClick={action} text="Sign Out"/>

export default SignOutButton;