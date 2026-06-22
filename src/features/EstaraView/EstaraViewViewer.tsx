import { useEffect, useRef } from "react";
import * as Cesium from "cesium";

export default function GlobeViewer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const viewer = new Cesium.Viewer(ref.current, {
      animation: false,
      timeline: false,
      baseLayerPicker: false,
      geocoder: false,
      infoBox: false,
      selectionIndicator: false,
    });
    
    viewer.scene.screenSpaceCameraController.minimumZoomDistance = 5000000;
    viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40000000;

    // remove Cesium globe rendering
    viewer.imageryLayers.removeAll();
    viewer.scene.globe.show = false;

    // custom globe
    viewer.scene.primitives.add(
      new Cesium.Primitive({
        geometryInstances: new Cesium.GeometryInstance({
          geometry: new Cesium.EllipsoidGeometry({
            radii: Cesium.Ellipsoid.WGS84.radii,
            vertexFormat: Cesium.VertexFormat.POSITION_AND_ST,
          }),
        }),

        appearance: new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType("Image", {
            image: "/maps/estara.svg",
          }),

          flat: true
        }),

        asynchronous: false,
      })
    );

    viewer.camera.flyHome(0);

    return () => viewer.destroy();
  }, []);

  return <div ref={ref} style={{ width: "100vw", height: "100vh" }} />;
}