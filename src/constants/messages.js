const error = {
  status: "Something went wrong"
};

const updatedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} updated`
  };
};

const updatedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} with no updating`
  };
};

const deletedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} deleted`
  };
};

const deletedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} not deleted`
  };
};