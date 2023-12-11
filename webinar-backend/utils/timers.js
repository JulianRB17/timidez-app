const deactivateUser = (schema) => {
  schema.active = false;
  schema.save();
};

const deactivateTimerUser = (schema) => {
  if (schema) {
    setTimeout((schema) => deactivateUser(schema), 3000, schema);
  }
};

const disengageNewUser = (schema) => {
  schema.new = false;
  schema.engaged = false;
  schema.save();
  deactivateTimerUser(schema);
};

const disengageTimerNewUser = (schema) => {
  if (schema) {
    setTimeout((schema) => disengageNewUser(schema), 3000, schema);
  }
};

const disengageUser = (schema) => {
  schema.reengaged = false;
  schema.save();
  console.log('usuario viejo desanclado');
  deactivateTimerUser(schema);
};

const disengageTimerUser = (schema) => {
  if (schema) {
    setTimeout((schema) => disengageUser(schema), 3000, schema);
  }
};

module.exports = { disengageTimerNewUser, disengageTimerUser };
