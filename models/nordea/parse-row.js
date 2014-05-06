module.exports = function(row) {
	var args = [];
	var current = '';
	var begin;
	var end;

	for (var i = 0; i < row.length; i++) {

		var c = row[i];

		if(c === '"' && !begin) {
			begin = true;
		} else if (c === '"' && begin) {
			begin = false;
		}
 		else if(c !== ',' || begin) {
			current += c;
		}

		var isEnd = (c === ',' && !begin);

		if(isEnd || (i + 1 ) === row.length) {
			if(current !== "") {
				args.push(current);
				current = '';
			}
		}
		
	};
	return args;
};