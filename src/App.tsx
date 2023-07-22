import * as React from "react";
import "./styles.css";
import { TDDocument, Tldraw, TldrawApp } from "@tldraw/tldraw";
import ZoomCustomUI from "./ZoomCustomUI";

const AppContext = React.createContext({} as TldrawApp);

export default function App() {
  // initial data coming from liveblock storage API
  const initialDocument = {
    id: "doc",
    name: "New Document",
    version: 2,
    pages: {
      page: {
        id: "page",
        name: "Page",
        childIndex: 1,
        shapes: {
          "2c756659-2c14-4345-043e-b8cd031d8374": {
            childIndex: 39,
            id: "2c756659-2c14-4345-043e-b8cd031d8374",
            label: "",
            labelPoint: [0.5, 0.5],
            name: "Ellipse",
            parentId: "page",
            point: [64, 192],
            radius: [672, 192],
            rotation: 0,
            style: {
              color: "green",
              dash: "dashed",
              isFilled: false,
              scale: 1,
              size: "large"
            },
            type: "ellipse"
          },
          "2e67059c-9ad1-4193-29f4-43775b70d7aa": {
            childIndex: 8,
            id: "2e67059c-9ad1-4193-29f4-43775b70d7aa",
            name: "Sticky",
            parentId: "page",
            point: [-32.9, 241.75],
            rotation: 0,
            size: [300, 400],
            style: {
              color: "red",
              dash: "solid",
              font: "sans",
              isFilled: false,
              scale: 1,
              size: "large",
              textAlign: "start"
            },
            text: "This is a Test Sticky Note",
            type: "sticky"
          },
          "7ea22b5a-8b34-4b12-2142-3ca17444e329": {
            childIndex: 38,
            id: "7ea22b5a-8b34-4b12-2142-3ca17444e329",
            label: "",
            labelPoint: [0.5, 0.5],
            name: "Triangle",
            parentId: "page",
            point: [32, 160],
            rotation: 3.992386683126398,
            size: [1056, 832],
            style: {
              color: "blue",
              dash: "draw",
              isFilled: false,
              scale: 1,
              size: "large"
            },
            type: "triangle"
          },
          "6c1866a2-ef48-4f44-241b-d5734564c5b1": {
            id: "6c1866a2-ef48-4f44-241b-d5734564c5b1",
            type: "image",
            name: "Image",
            parentId: "page",
            childIndex: 17,
            point: [1216, 96],
            size: [288, 160],
            rotation: 0,
            style: {
              color: "violet",
              size: "small",
              isFilled: false,
              dash: "solid",
              scale: 1,
              font: "sans",
              textAlign: "start"
            },
            assetId: "ce121be2-638f-4e09-0a41-4a4065cdbc14"
          }
        },
        bindings: {
          "6a9dc9b6-1f6f-4d33-1762-9906e370d5cd": {
            distance: 8,
            fromId: "05bc11c0-e9ab-434e-362c-1f11ebd606bf",
            handleId: "start",
            id: "6a9dc9b6-1f6f-4d33-1762-9906e370d5cd",
            point: [0.07, 0.32],
            toId: "ac5ce913-7d0e-42f1-3ec0-2a3da652c2f8",
            type: "arrow"
          }
        }
      }
    },
    pageStates: {
      page: {
        id: "page",
        selectedIds: [],
        camera: {
          point: [64, -15],
          zoom: 1
        }
      }
    },
    assets: {
      "ce121be2-638f-4e09-0a41-4a4065cdbc14": {
        id: "ce121be2-638f-4e09-0a41-4a4065cdbc14",
        size: [277, 182],
        src:
          "data:image/jpeg;base64,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",
        type: "image"
      }
    }
  };

  const [app, setApp] = React.useState<TldrawApp>();

  const onMount = React.useCallback((app: TldrawApp) => {
    console.log("onMount");
    app.toggleGrid();
    app.pause();
    setApp(app);
    console.log(app.document);
    setTimeout(() => {
      app.zoomToFit();
    }, 100);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }}
    >
      <Tldraw
        showPages={false}
        showMenu={false}
        showStyles={false}
        showUI={false}
        disableAssets={false}
        readOnly={false}
        document={initialDocument as TDDocument}
        onMount={onMount}
      />
      {app && (
        <AppContext.Provider value={app}>
          <ZoomCustomUI app={app} />
        </AppContext.Provider>
      )}
    </div>
  );
}
