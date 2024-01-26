import Draggable from "react-draggable";
import CustomIcon from "./CustomIcon";
import { useRef, useState } from "react";

type WindowComponentProps = {
  title: string;
  className: string;
  rest?: React.ComponentPropsWithoutRef<any>;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Window({
  title,
  className,
  children,
  footer,
  ...rest
}: WindowComponentProps) {
  const window = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const onMinimize = () => {
    setIsMinimized(true);
  };
  const onMaximize = () => {
    setIsMinimized(false);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Draggable handle=".window-header">
          <div
            ref={window}
            className={`window ${isMinimized ? "minimized" : ""} ${className}`}
            {...rest}
          >
            <div className="window-header">
              <p>{title}</p>
              <div className="window-btns">
                <button id="min" onClick={onMinimize}>
                  <CustomIcon name="min" color="#FC6095" />
                </button>
                <button id="max" onClick={onMaximize}>
                  <CustomIcon name="max" color="#FC6095" />
                </button>
                <button id="close" onClick={onClose}>
                  <CustomIcon name="close" color="#FC6095" />
                </button>
              </div>
            </div>

            <div className={`window-body`}>{children}</div>

            <div className="window-footer">{footer || <></>}</div>
          </div>
        </Draggable>
      )}
    </>
  );
}
