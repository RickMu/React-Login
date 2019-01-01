import { LinkButton } from "./LinkButton";
import React from 'react';
import { ActionButton } from "./ActionButton";

export const LoginButton = () => <LinkButton link="/login" text="login"/>

export const SignOutButton = ({action}) => <ActionButton onClick={action} text="Sign Out"/>