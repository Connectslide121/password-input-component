/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function PasswordInput(props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [password, setPassword] = useState("");

  //State variables for input element definition
  const [inputName, setInputName] = useState("password");
  const [inputId, setInputId] = useState("password");
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [isRequired, setIsRequired] = useState(true);

  // State variables for the password requirements, controlled via props
  const [minLength, setMinLength] = useState(6);
  const [specialCharacter, setSpecialCharacter] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [digit, setDigit] = useState(true);

  // State variables for each password requirement current state, controlled by the component
  const [passwordTooShort, setPasswordTooShort] = useState(false);
  const [passwordHasSpecial, setPasswordHasSpecial] = useState(false);
  const [passwordHasLower, setPasswordHasLower] = useState(false);
  const [passwordHasUpper, setPasswordHasUpper] = useState(false);
  const [passwordHasDigit, setPasswordHasDigit] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
    if (props.onInputChange) props.onInputChange(e);
  };

  useEffect(() => {
    if (props.inputName !== undefined) {
      setInputName(props.inputName);
    } else setInputName("password");
  }, [props.inputName]);

  useEffect(() => {
    if (props.inputId !== undefined) {
      setInputId(props.inputId);
    } else setInputId("password");
  }, [props.inputId]);

  useEffect(() => {
    if (props.inputPlaceholder !== undefined) {
      setInputPlaceholder(props.inputPlaceholder);
    } else setInputPlaceholder("");
  }, [props.inputPlaceholder]);

  useEffect(() => {
    if (props.isRequired !== undefined) {
      setIsRequired(props.isRequired);
    } else setIsRequired(true);
  }, [props.isRequired]);

  useEffect(() => {
    if (props.minLength) {
      setMinLength(props.minLength);
    } else setMinLength(6);
  }, [props.minLength]);

  useEffect(() => {
    if (props.specialCharacter !== undefined) {
      setSpecialCharacter(props.specialCharacter);
    } else setSpecialCharacter(true);
  }, [props.specialCharacter]);

  useEffect(() => {
    if (props.lowercase !== undefined) {
      setLowercase(props.lowercase);
    } else setLowercase(true);
  }, [props.lowercase]);

  useEffect(() => {
    if (props.uppercase !== undefined) {
      setUppercase(props.uppercase);
    } else setUppercase(true);
  }, [props.uppercase]);

  useEffect(() => {
    if (props.digit !== undefined) {
      setDigit(props.digit);
    } else setDigit(true);
  }, [props.digit]);

  useEffect(() => {
    if (password.length >= minLength) {
      setPasswordTooShort(true);
    } else {
      setPasswordTooShort(false);
    }
    if (password.match(/[a-z]/)) {
      setPasswordHasLower(true);
    } else {
      setPasswordHasLower(false);
    }
    if (password.match(/[A-Z]/)) {
      setPasswordHasUpper(true);
    } else {
      setPasswordHasUpper(false);
    }
    if (password.match(/[0-9]/)) {
      setPasswordHasDigit(true);
    } else {
      setPasswordHasDigit(false);
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      setPasswordHasSpecial(true);
    } else {
      setPasswordHasSpecial(false);
    }
  }, [password, minLength]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        className="password-input"
        type="password"
        name={inputName}
        id={inputId}
        onChange={(e) => handleChange(e)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        placeholder={inputPlaceholder}
        required={isRequired}
      />
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "-310px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "8px",
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white"
          }}
          className="password-tooltip"
        >
          <p>
            <span>{passwordTooShort ? "\u{2705}" : "\u{274C}"}</span> at least{" "}
            {minLength} characters
          </p>
          {specialCharacter && (
            <p>
              <span>{passwordHasSpecial ? "\u{2705}" : "\u{274C}"}</span> at
              least one special character (&*_+:"...)
            </p>
          )}
          {lowercase && (
            <p>
              <span>{passwordHasLower ? "\u{2705}" : "\u{274C}"}</span> at least
              one lowercase ('a'-'z')
            </p>
          )}
          {uppercase && (
            <p>
              <span>{passwordHasUpper ? "\u{2705}" : "\u{274C}"}</span> at least
              one uppercase ('A'-'Z')
            </p>
          )}
          {digit && (
            <p>
              <span>{passwordHasDigit ? "\u{2705}" : "\u{274C}"}</span> at least
              one digit ('0'-'9')
            </p>
          )}
        </div>
      )}
    </div>
  );
}
