// Random cloud event
const cloud = document.querySelectorAll('.cloud');
// cloud0, 1, 2
for(let i=0; i<3; i++) {
	let random = Number((Math.random()*90)); // top
	let random2 = Number((Math.random()*90));  // left
	cloud[i].style.top = `${random}%`;
	cloud[i].style.left = `${random2}%`;
}
// cloud3, 4, 5
for(let i=3; i<6; i++) {
	let random = Number((Math.random()*-10)); // top
	let random2 = Number((Math.random()*100)); // left
	cloud[i].style.top = `${random}%`;
	cloud[i].style.left = `${random2}%`;
}
let plus = 0.001;
let cloudX = 0; // 함수로 만들어볼 것
let cloudY = 0;
let cloudX2 = 0;
let cloudY2 = 0;
let cloudX3 = 0;
let cloudY3 = 0;
let pl = Math.floor(Math.random()*4);
let pl2 = Math.floor(Math.random()*4);
let pl3 = Math.floor(Math.random()*4);
function cloudMove() {
	if(pl == 0) {
		cloudX += plus;
		cloudY += plus;
	}
	if(pl == 1) {
		cloudX -= plus;
		cloudY -= plus;
	}
	if(pl == 2) {
		cloudX += plus;
		cloudY -= plus;
	}
	if(pl == 3) {
		cloudX -= plus;
		cloudY += plus;
	}
	if(pl2 == 0) {
		cloudX2 += plus;
		cloudY2 += plus;
	}
	if(pl2 == 1) {
		cloudX2 -= plus;
		cloudY2 -= plus;
	}
	if(pl2 == 2) {
		cloudX2 += plus;
		cloudY2 -= plus;
	}
	if(pl2 == 3) {
		cloudX2 -= plus;
		cloudY2 += plus;
	}
	if(pl3 == 0) {
		cloudX3 += plus;
		cloudY3 += plus;
	}
	if(pl3 == 1) {
		cloudX3 -= plus;
		cloudY3 -= plus;
	}
	if(pl3 == 2) {
		cloudX3 += plus;
		cloudY3 -= plus;
	}
	if(pl3 == 3) {
		cloudX3 -= plus;
		cloudY3 += plus;
	}
	cloud[0].style.transform = `translate(${cloudX}%, ${cloudY}%)`;
	cloud[1].style.transform = `translate(${cloudX2}%, ${cloudY2}%)`;
	cloud[2].style.transform = `translate(${cloudX3}%, ${cloudY3}%)`;
	cloud[3].style.transform = `translate(${cloudX}%, ${cloudY}%)`;
	cloud[4].style.transform = `translate(${cloudX2}%, ${cloudY2}%)`;
	cloud[5].style.transform = `translate(${cloudX3}%, ${cloudY3}%)`;
}
setInterval(cloudMove, 1)

/* 맵 클릭 이벤트 */
$('.about_map, .works_map').click(function() {
	$(this).next().removeClass('modal_wrap_close svgClose')
	.addClass('modal_wrap_open svgOpen');
	$(this).next().find('.modal').addClass('modalOpen');
	$(this).next().find('.face').addClass('swing');
})
$('.skill_map, .contact_map').click(function() {
	$(this).next().removeClass('modal_wrap_close2').addClass('modal_wrap_open2');
	$(this).next().find('.modal').addClass('modalOpen');
})
$('.minigame_map').click(() => {
	$('.minigame_modal_wrap').removeClass('modal_wrap_close3').addClass('modal_wrap_open3');
	$('.minigame_modal_wrap').find('.modal').removeClass('minigameClose')
	.addClass('minigameOpen');
})
/* (OFF) 모달 검은부분 눌렀을 때 꺼지게 */
$('.about_modal_wrap, .works_modal_wrap').click(function(e) {
	if(e.target === e.currentTarget) { // 부모를 클릭했을 때만 사라지게
		$(this).removeClass('modal_wrap_open svgOpen')
		.addClass('modal_wrap_close svgClose');
		$('.modal').removeClass('modalOpen');
		$('.face').removeClass('swing');
	}
})
$('.skill_modal_wrap, .contact_modal_wrap').click(function(e) {
	if(e.target === e.currentTarget) {
		$(this).removeClass('modal_wrap_open2').addClass('modal_wrap_close2');
		$('.modal').removeClass('modalOpen');
	}
})
$('.minigame_modal_wrap').click(function(e) {
	if(e.target === e.currentTarget) {
		$(this).removeClass('modal_wrap_open3').addClass('modal_wrap_close3');
		$('.modal').removeClass('minigameOpen').addClass('minigameClose');
	}
})
/* (OFF) X 눌렀을 때 꺼지게 */
$('.about_modal_wrap .close, .works_modal_wrap .close').click(function() {
	$('.modal_wrap').removeClass('modal_wrap_open svgOpen')
	.addClass('modal_wrap_close svgClose');
	$('.modal').removeClass('modalOpen');
	$('.face').removeClass('swing');
})
$('.skill_modal_wrap .close, .contact_modal_wrap .close').click(function() {
	$('.modal_wrap').removeClass('modal_wrap_open2').addClass('modal_wrap_close2');
	$('.modal').removeClass('modalOpen');
})
$('.minigame_modal_wrap .close').click(function() {
	$('.minigame_modal_wrap').removeClass('modal_wrap_open3')
	.addClass('modal_wrap_close3');
	$('.modal').removeClass('minigameOpen').addClass('minigameClose');
})

/* 핀 눌렀을 때 */
$('.pin').click(() => {
	$('.face').removeClass('swing');
})

/* 모바일용 스크립트 */
$('.alert span').click(() => {
	$('.alert').hide();
})
// 휠 이벤트
const skillWrap = document.querySelectorAll('.m_skill_contents_wrap');
const worksWrap = document.querySelectorAll('.m_works_contents_wrap');
window.addEventListener('wheel', () => {
	let scrollY = window.pageYOffset;
	console.log(scrollY);
	for(let i=0; i<skillWrap.length; i++) {
		if(scrollY > skillWrap[i].offsetTop - 800) {
			skillWrap[i].classList.add('upup');
		}
	}
	for(let i=0; i<worksWrap.length; i++) {
		if(scrollY > worksWrap[i].offsetTop - 800) {
			worksWrap[i].classList.add('sideMove');
		}
	}
})
// 터치 이벤트
window.addEventListener('touchmove', () => {
	let mobileScrollY = window.pageYOffset;
	console.log(mobileScrollY);
	for(let i=0; i<skillWrap.length; i++) {
		if(mobileScrollY > skillWrap[i].offsetTop - 800) {
			skillWrap[i].classList.add('upup');
		}
	}
	for(let i=0; i<worksWrap.length; i++) {
		if(mobileScrollY > worksWrap[i].offsetTop - 800) {
			worksWrap[i].classList.add('sideMove');
		}
	}
})