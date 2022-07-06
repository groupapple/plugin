import { ReactNode, useContext } from "react";
import { CustomizeContext } from "../CustomizeProvider";

export const InnerCard = ({ children }: { children: ReactNode }) => {
  const customSettings = useContext(CustomizeContext);
  const { borderRadius } = customSettings.customization;
  return (
    <div
      className="bg-widget-secondary p-3"
      style={{
        borderBottomRightRadius: `calc(0.75rem * ${borderRadius})`,
        borderBottomLeftRadius: `calc(0.75rem * ${borderRadius})`,
      }}
    >
      {children}
    </div>
  );
};
