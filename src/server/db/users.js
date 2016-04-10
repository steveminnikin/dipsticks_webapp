var records = [
    { id: 1, username: 'steve', password: 'issapc', displayName: 'Steve', emails: [ { value: 'steve@dipsticksengineering.co.uk' } ] }
  , { id: 2, username: 'tash', password: 'Minnikins11', displayName: 'Tash', emails: [ { value: 'laura@dipsticksengineering.co.uk' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}