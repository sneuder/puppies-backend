const error = {
  status: 'Something went wrong',
};

const noRecords = (recordType) => {
  return {
    status: `${recordType} no found`,
  };
};

const noRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} not found`,
  };
};

const updatedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} updated`,
  };
};

const updatedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} with no updating`,
  };
};

const deletedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} deleted`,
  };
};

const deletedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} not deleted`,
  };
};

const attributeElement = (attr, name) => {
  return {
    status: `${attr} ${name} already exist`,
  };
};

module.exports = {
  error,
  noRecords,
  noRecord,
  updatedRecord,
  updatedNoRecord,
  deletedRecord,
  deletedNoRecord,
  attributeElement,
};
