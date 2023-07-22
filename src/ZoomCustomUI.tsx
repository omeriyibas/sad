import styled from "styled-components";
import PlusCircleIcon from "./PlusCircleIcon";
import MinusCircleIcon from "./MinusCircleIcon";
import { TldrawApp } from "@tldraw/tldraw";

const ToolbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 50%;
`;

const ToolbarOptionsContainer = styled.div`
  display: flex;
  bottom: 0rem;
  justify-content: center;
  align-items: center;
  height: 65px;
  position: absolute;
  gap: 1rem;
`;

const ActionTools = styled.div`
  padding: 0 4px;
  width: fit-content;
  display: flex;
  align-items: end;
  justify-content: center;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 4;
  user-select: none;
`;

const ActionToolButton = styled.div`
  cursor: pointer;
`;

const ZoomCustomUI = ({ app }: { app: TldrawApp }) => {
  return (
    <>
      <ToolbarContainer>
        <ToolbarOptionsContainer>
          <ActionTools>
            <ActionToolButton onClick={() => app.zoomIn()}>
              <PlusCircleIcon />
            </ActionToolButton>
            <ActionToolButton onClick={() => app.zoomOut()}>
              <MinusCircleIcon />
            </ActionToolButton>
          </ActionTools>
        </ToolbarOptionsContainer>
      </ToolbarContainer>
    </>
  );
};

export default ZoomCustomUI;
