const showMore = document.querySelectorAll('.show-more-buttons'),
	showLess = document.querySelectorAll('.show-less-buttons'),
	faqAnswer = document.querySelectorAll('.question-answer');

function showInfo(index) {
	if (index === 0) {
		showMore[index].classList.add('hide');
		showLess[index].classList.remove('hide');
		faqAnswer[index].classList.remove('hide');
	} else {
		showMore[index].classList.add('hide');
		showLess[index].classList.remove('hide');
		faqAnswer[index].classList.remove('hide');
	}
}

function hideInfo(index) {
	if (index === 0) {
		showMore[index].classList.remove('hide');
		showLess[index].classList.add('hide');
		faqAnswer[index].classList.add('hide');
	} else {
		showMore[index].classList.remove('hide');
		showLess[index].classList.add('hide');
		faqAnswer[index].classList.add('hide');
	}
}
