function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'partials/member.html',
    scope: {
      member: '='
    },
    controller: 'MemberController'
  };
}