import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import RegIn from "../../../components/RegIn";
import Info from "../../../components/Info";
export default function RegInPage() {
  const [step, setStep] = useState(false);
  function onRegIn(data) {
    setStep(true);
    console.log(data);
  }
  function onInfo(data) {}

  return (
    <React.Fragment>
      {step ? <Info onInfo={onInfo}></Info> : <RegIn onRegIn={onRegIn}></RegIn>}
    </React.Fragment>
  );
}
