// Original file: proto/project.proto

import type { ResponseContext as _projection_ResponseContext, ResponseContext__Output as _projection_ResponseContext__Output } from '../projection/ResponseContext';
import type { Ignore as _projection_Ignore, Ignore__Output as _projection_Ignore__Output } from '../projection/Ignore';
import type { Index as _projection_Index, Index__Output as _projection_Index__Output } from '../projection/Index';
import type { Update as _projection_Update, Update__Output as _projection_Update__Output } from '../projection/Update';
import type { UpdateScript as _projection_UpdateScript, UpdateScript__Output as _projection_UpdateScript__Output } from '../projection/UpdateScript';
import type { Delete as _projection_Delete, Delete__Output as _projection_Delete__Output } from '../projection/Delete';

export interface ProjectionResult {
  'context'?: (_projection_ResponseContext | null);
  'ignore'?: (_projection_Ignore | null);
  'index'?: (_projection_Index | null);
  'update'?: (_projection_Update | null);
  'updateScript'?: (_projection_UpdateScript | null);
  'delete'?: (_projection_Delete | null);
  'operation'?: "ignore"|"index"|"update"|"updateScript"|"delete";
}

export interface ProjectionResult__Output {
  'context': (_projection_ResponseContext__Output | null);
  'ignore'?: (_projection_Ignore__Output | null);
  'index'?: (_projection_Index__Output | null);
  'update'?: (_projection_Update__Output | null);
  'updateScript'?: (_projection_UpdateScript__Output | null);
  'delete'?: (_projection_Delete__Output | null);
  'operation': "ignore"|"index"|"update"|"updateScript"|"delete";
}
