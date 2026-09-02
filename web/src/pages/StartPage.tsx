import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

//Mock Daten, bis wann Backend kommt
const MockUsers = [
    {email: "lehrer@schule.de", password:"test1234"},
];

function StartPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();

        const knownUser = MockUsers.find((user) => user.email === email);

        if (knownUser){
            setErrorMessage("");
            navigate("/dashboard");
        }else{
            setErrorMessage("Diese Email ist nicht registiert !")
        }
    }

    return(
        <div>
            <h2>Anmelden</h2>
            {errorMessage && (
                <p style={{color: "red", marginTop: "0.5rem"}}>{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <br />
                    <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Bitte gib deine Email an!"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Passwort</label>
                    <br />
                    <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Bitte gib deine Password an!"
                    required
                    />
                </div>

                <button type="submit" style={{marginTop: "1rem"}}>
                    Anmelden
                </button>

                <p style={{marginTop: "1.5rem"}}>
                    Noch nicht registiert? <Link to={"/onboarding"}> Jetzt registieren</Link>
                </p>
            </form>
        </div>
    )
}

export default StartPage;