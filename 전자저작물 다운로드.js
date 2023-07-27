let buttons = document.querySelectorAll('.main-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // alert(`"${button.textContent}" 버튼이 클릭되었습니다.`);
    });
});

document.getElementById('download-button').addEventListener('click', function() {
    var r = confirm("확인을 누르면 6-1 전자 저작물 다운로드가 시작됩니다.");
    if (r == true) {
        // 다운로드 코드를 여기에 작성합니다.
    } else {
        // 취소를 눌렀을 때의 동작을 여기에 작성합니다.
    }
});
