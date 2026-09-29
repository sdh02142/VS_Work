 // JavaScript 영역, JavaScript 문법 적용

        // 브라우저 출력(html markup 사용 가능.)
        document.write("<h1>Hello, JavaScript!</h1>");
        
        // 콘솔 출력
        console.log("Hello, JavaScript!");

        // h2태그에 onclick 했을 때, CSS 적용하는 기능(함수 function) 작성
        function onClickMethod(i) {
            console.log("function called.");
            console.log(i);
            i.style.backgroundColor='red';
            i.style.color='white';

            // h3 태그에 CSS 적용
            // 1) h3 태그 찾기(id 사용, 객체 직접 탐색, ... etc)
            const a = document.getElementById('a'); // id로 찾기

            // 2) 찾은 객체 CSS 적용
            a.style.border = '5px double orange';
            a.style.backgroundColor='blue';
            a.style.color='white';
        }
        /*
        JavaScript는 순차적으로 위에서 아래로 내려오면서 작업이 진행되기 때문에,
        body 이전에 작성한 script로는 body 요소에 접근할 수 없음.

        // h2 태그에 mouseover, mouseout 이벤트 적용
        // 1) 이벤트 적용할 대상(element) 찾기
        const b = document.getElementById('h2');
        console.log(b);

        // 2) 이벤트 등록
        */

        // 함수 정의
        function onMouseOver(){
            console.log('onMouseOver() called.')
        };