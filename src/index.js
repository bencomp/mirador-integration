import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { annotationPlugins, LocalStorageAdapter } from 'mirador-annotations';

const config = {
  id: 'demo',
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
    // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
  },
  window: {
    defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  windows: [{
    imageToolsEnabled: true,
    imageToolsOpen: false,
    manifestId: 'https://digitalcollections.universiteitleiden.nl/iiif_manifest/item%3A1602664/manifest',
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  annotationPlugins
]);
