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
  const [nonAlphaNumeric, setNonAlphaNumeric] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [digit, setDigit] = useState(true);

  // State variables for each password requirement state, controlled by the component
  const [passwordTooShort, setPasswordTooShort] = useState(false);
  const [passwordRequiresNonAlphanumeric, setPasswordRequiresNonAlphanumeric] =
    useState(false);
  const [passwordRequiresLower, setPasswordRequiresLower] = useState(false);
  const [passwordRequiresUpper, setPasswordRequiresUpper] = useState(false);
  const [passwordRequiresDigit, setPasswordRequiresDigit] = useState(false);

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
    if (props.nonAlphaNumeric !== undefined) {
      setNonAlphaNumeric(props.nonAlphaNumeric);
    } else setNonAlphaNumeric(true);
  }, [props.nonAlphaNumeric]);

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
      setPasswordRequiresLower(true);
    } else {
      setPasswordRequiresLower(false);
    }
    if (password.match(/[A-Z]/)) {
      setPasswordRequiresUpper(true);
    } else {
      setPasswordRequiresUpper(false);
    }
    if (password.match(/[0-9]/)) {
      setPasswordRequiresDigit(true);
    } else {
      setPasswordRequiresDigit(false);
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      setPasswordRequiresNonAlphanumeric(true);
    } else {
      setPasswordRequiresNonAlphanumeric(false);
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
          {nonAlphaNumeric && (
            <p>
              <span>
                {passwordRequiresNonAlphanumeric ? "\u{2705}" : "\u{274C}"}
              </span>{" "}
              at least one non alphanumeric character
            </p>
          )}
          {lowercase && (
            <p>
              <span>{passwordRequiresLower ? "\u{2705}" : "\u{274C}"}</span> at
              least one lowercase ('a'-'z')
            </p>
          )}
          {uppercase && (
            <p>
              <span>{passwordRequiresUpper ? "\u{2705}" : "\u{274C}"}</span> at
              least one uppercase ('A'-'Z')
            </p>
          )}
          {digit && (
            <p>
              <span>{passwordRequiresDigit ? "\u{2705}" : "\u{274C}"}</span> at
              least one digit ('0'-'9')
            </p>
          )}
        </div>
      )}
    </div>
  );
}
