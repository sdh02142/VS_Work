        // h2 태그에 mouseover, mouseout 이벤트 적용
        // 1) 이벤트 적용할 대상(element) 찾기
        const c = document.getElementById('h2');
        console.log(c);
        
        // 2) 이벤트 등록
        // onmouseover는 반드시 모두 소문자 작성
        c.onmouseover = onMouseOver;

        // ※ 익명 함수 등록(해당 기능이 실행될 때만 호출 및 사용되는 함수로 일회성이면서 재활용이 안 됨. -> 해당 기능이 실행될 때 제외하고는 다른 곳에서 해당 함수를 호출할 수 없음.)
        c.onmouseout = function onMouseOut(){
            console.log('onMouseOut() called.');
        };
        
        /*
        JavaScript 내에서 어떤 함수를 등록(부여)하는 것과 호출하는 것의 차이는 ()의 유무로 판단되며,
        ()가 붙은 함수 [func()] <- script가 읽어질 때 즉시 실행됨.(호출)
        ()가 붙지 않은 함수 [func] <- 해당 함수가 등록된 함수 또는 기능이 실행될 때 호출됨.(부여)
        */