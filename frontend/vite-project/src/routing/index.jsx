import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import config from "../config";
import smartMapping from "../smart-components";
import { HOC } from "../constants";

const DynamicRouter = () => {

    return (
        <div>
            <Routes>
                { config.map(({ path, name, components}) => {
                    const enabledComponents = components
                    .filter(comp => comp.enable)
                    .map(comp => {
                        const Component = smartMapping[comp.name];
                        const WrappedComponent = HOC[name](Component);
                        return (props) => <WrappedComponent data={comp.data} {...props} /> 
                    });

                    const SmartRender = () => (
                        <>
                            {enabledComponents.map((WrappedComponent, index) => (
                                <WrappedComponent key={index}/>
                            ))}
                        </>
                    );
                    return (
                        <Route
                        key={path}
                        path={path}
                        exact
                        element={<SmartRender/>}
                        />
                    )
                })}
            </Routes>
        </div>
    )
};

export default DynamicRouter;