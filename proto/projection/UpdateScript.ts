// Original file: proto/project.proto

import type { Script as _projection_Script, Script__Output as _projection_Script__Output } from '../projection/Script';

export interface UpdateScript {
  'id'?: (string);
  'script'?: (_projection_Script | null);
}

export interface UpdateScript__Output {
  'id': (string);
  'script': (_projection_Script__Output | null);
}
