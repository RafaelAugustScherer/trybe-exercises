export const CHANGE_FIELD_PERSONAL = 'CHANGE_FIELD_PERSONAL';
export const CHANGE_FIELD_PROFESSIONAL = 'CHANGE_FIELD_PROFESSIONAL';

export const changeField = (type, field, value) => ({
  type,
  field,
  value,
});
