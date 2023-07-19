import * as React from "react";
import { useState, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from "../Utils.jsx/TabSlice";
import { AddCapabilities } from "./AddCapabilities";
import { AddRoleName } from "./AddRoleName";
import { Preview } from "./Preview";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const steps = ["Add Role Name", "Add Capabilities ", "Preview"];
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const disPatch = useDispatch();
  const [finalResult, setFinalReult] = useState();
  console.log(finalResult);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    disPatch(activeTab(steps[activeStep]));
    setOpen(true);
  };

  const handleReset = () => {
    setActiveStep(0);

    setCompleted({});
  };
  disPatch(activeTab(steps[activeStep]));
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              color="inherit"
              // onClick={handleStep(index)}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Box>

            <div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Submited Response"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <div>
                      <p>Role Name: {finalResult.formData.roleName}</p>
                      <p>Descreption: {finalResult.formData.descreption}</p>
                      <p>User type: {finalResult.formData.selectVal}</p>
                      <div>
                        {finalResult.arr.map((data) => (
                          <div>
                            <label className="d-flex gap-2">
                              <input type="checkbox" checked={true} disabled />
                              {data.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}></Typography>
            {activeStep === 0 && <AddRoleName />}
            {activeStep === 1 && (
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <div className="activeStepOtherBtn">
                  <Button color="inherit" onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>

                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 3 }}
                  >
                    <ArrowBackIcon />
                    Back
                  </Button>
                  <Button variant="contained" onClick={handleComplete}>
                    Save & Next
                  </Button>
                </div>
              </Box>
            )}
            {activeStep === 1 && <AddCapabilities />}
            {activeStep === 2 && (
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <div className="activeStepOtherBtn">
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 3 }}
                  >
                    <ArrowBackIcon />
                    Back to Capabilities
                  </Button>
                  <Button variant="contained" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Save & Next"}
                  </Button>
                </div>
              </Box>
            )}
            {activeStep === 2 && <Preview setFinalReult={setFinalReult} />}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep === 0 && (
                <div className="activeStep0Btn">
                  <Button variant="contained" onClick={handleComplete}>
                    Save & Next
                  </Button>
                </div>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
export { StepperComponent };
