function solution(id_list, report, k) {
  let report_hits = {};
  id_list.forEach((el) => {
    report_hits[el] = 0;
  });

  let report_list = {};
  report.forEach((el) => {
    let arr = el.split(' ');
    if (!report_list[arr[0]]) report_list[arr[0]] = [arr[1]];
    else if (report_list[arr[0]].indexOf(arr[1]) === -1) {
      report_list[arr[0]].push(arr[1]);
    }
  });

  let report_keys = Object.keys(report_list);
  report_keys.forEach((key) => {
    report_list[key].forEach((el) => {
      report_hits[el] += 1;
    });
  });

  let result = [];
  for (reporter of id_list) {
    let list = report_list[reporter];

    if (list === undefined) {
      result.push(0);
      continue;
    }
    let count = 0;
    for (user of list) {
      if (report_hits[user] >= k) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
}

let id_list, report, k;

id_list = ['muzi', 'frodo', 'apeach', 'neo'];
report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
  'frodo neo',
];
k = 2;

// id_list = ['con', 'ryan'];
// report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
// k = 3;
console.log(solution(id_list, report, k));
