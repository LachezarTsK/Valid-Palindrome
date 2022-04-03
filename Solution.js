
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    const alphanumeric = /[a-z0-9]/i;

    while (left < right) {
        while (left < right && !alphanumeric.test(s.charAt(left))) {
            left++;
        }
        while (left < right && !alphanumeric.test(s.charAt(right))) {
            right--;
        }
        if (s.charAt(left++).toLowerCase() !== s.charAt(right--).toLowerCase()) {
            return false;
        }
    }
    return true;
};
