function showTable() {
	document.querySelector('table').style.visibility = 'visible'
	document.querySelector('.all_box').style.filter = 'blur(2px)'
	document.querySelector('.wrapper').style.filter = 'blur(2px)'
	document.querySelector('header').style.filter = 'blur(2px)'
	document.querySelector('.personall').style.filter = 'blur(2px)'
	document.body.style.overflow = 'hidden'
	document.main.style.filter = 'blur(2px)'
}

function closeTable() {
	document.querySelector('table').style.visibility = 'hidden'
	document.querySelector('.all_box').style.filter = 'blur(0px)'
	document.querySelector('header').style.filter = 'blur(0px)'
	document.querySelector('.wrapper').style.filter = 'blur(0px)'
	document.querySelector('.personall').style.filter = 'blur(0px)'
	document.body.style.overflow = 'scroll'
}

function toggleLanguageMenu() {
	const menu = document.getElementById('dropdown-menu')
	if (menu.style.display === 'none') {
		menu.style.display = 'block'
	} else {
		menu.style.display = 'none'
	}
}

function setLanguage(language) {
	const element = document.querySelector('.ukr')
	const title_main = document.querySelector('.typing-demo')
	const abon = document.querySelector('.abon')
	const pers = document.querySelector('.pers')
	const posl = document.querySelector('.posl')
	const cont = document.querySelector('.cont')
	const main = document.querySelector('.main')
	const menu = document.getElementById('dropdown-menu')
	const first_slide = document.querySelector('.first_slide')
	const second_slide = document.querySelector('.second_slide')
	const third_slide = document.querySelector('.third_slide')
	const fourth_slide = document.querySelector('.fourth_slide')
	const title_main_second = document.querySelector('.title_main_second')
	const every_day = document.querySelectorAll('.every_day')
	const morning = document.querySelector('.morning')
	const day = document.querySelector('.day')
	const onetime = document.querySelector('.onetime')
	const even = document.querySelector('.even')
	const ten_visit = document.querySelector('.ten_visit')
	const group_train = document.querySelector('.group_train')
	const mond_sund = document.querySelector('.mond_sund')
	const mond_frid = document.querySelector('.mond_frid')
	const full = document.querySelector('.full')
	const but_det = document.querySelectorAll('.but_det')
	const personal_train = document.querySelector('.personal_train')
	const title_personal = document.querySelector('.title-personal')
	const name_personal_1 = document.querySelector('.name-personal-1')
	const name_personal_2 = document.querySelector('.name-personal-2')
	const name_personal_3 = document.querySelector('.name-personal-3')
	const name_personal_4 = document.querySelector('.name-personal-4')
	const name_personal_5 = document.querySelector('.name-personal-5')
	const name_personal_6 = document.querySelector('.name-personal-6')
	const n = document.querySelector('.n')
	const a = document.querySelector('.a')
	const card_buuton = document.querySelectorAll('.card_buuton')
	const title_main_poslygi = document.querySelector('.title_main_poslygi')
	const f = document.querySelector('.f')
	const s = document.querySelector('.s')
	const t = document.querySelector('.t')
	const fo = document.querySelector('.fo')
	const fi = document.querySelector('.fi')
	const si = document.querySelector('.si')
	const ei = document.querySelector('.ei')
	const ni = document.querySelector('.ni')
	const awe = document.querySelector('.awe')
	const qwer = document.querySelector('.qwer')
	const qwert = document.querySelector('.qwert')
	const fot_fot = document.querySelector('.fot_fot')
	const qaz = document.querySelector('.qaz')
	const wsx = document.querySelector('.wsx')
	const edc = document.querySelector('.edc')

	element.textContent = language
	menu.style.display = 'none'

	if (element.textContent === 'UKR') {
		abon.textContent = 'Абонементи'
		pers.textContent = 'Персонал'
		posl.textContent = 'Послуги'
		cont.textContent = 'Контакти'
		main.textContent = 'Головна'
		title_main.style.marginLeft = '33%'
		title_main.textContent = 'Тренажерний зал Kurylchuk'
		first_slide.textContent = 'Тренажерний зал Kurylchuk'
		second_slide.textContent = 'Цифрові технології'
		third_slide.textContent = 'Глобалізація'
		fourth_slide.textContent = 'Нові технології'
		title_main_second.textContent = 'АБОНЕМЕНТИ'
		every_day.forEach(function (element) {
			element.textContent = 'Кожного дня'
		})
		but_det.forEach(function (element) {
			element.textContent = 'Детальніше'
		})
		card_buuton.forEach(function (element) {
			element.textContent = 'Про тренера'
		})
		morning.textContent = 'РАНОК'
		day.textContent = 'ДЕНЬ'
		onetime.textContent = 'РАЗОВЕ ВІДВІДУВАННЯ'
		even.textContent = 'ВЕЧІР'
		ten_visit.textContent = 'ДЕСЯТИРАЗОВЕ ВІДВІДУВАННЯ'
		group_train.textContent = 'ГРУПОВЕ ТРЕНУВАННЯ'
		mond_sund.textContent = 'Понеділок - Неділя'
		mond_frid.textContent = "Понеділок - П'ятниця"
		full.textContent = 'ПОВНИЙ АБОНЕМЕНТ'
		personal_train.textContent = 'ПЕРСОНАЛЬНЕ ТРЕНУВАННЯ'
		title_personal.textContent = 'ПЕРСОНАЛ'
		name_personal_1.textContent = 'Олександр Ковальчук'
		name_personal_2.textContent = 'Катерина Мельник'
		name_personal_3.textContent = 'Олена Демченко'
		name_personal_4.textContent = 'Микита Бондаренко'
		name_personal_5.textContent = 'Юн Су Мін'
		name_personal_6.textContent = 'Віталій Шевченко'
		n.textContent = 'Дмитро Левченко'
		a.textContent = 'Василь Гончарук'
		title_main_poslygi.textContent = 'Послуги'
		f.textContent = 'ТЯЖКА АТЛЕТИКА'
		s.textContent = 'КРОСФІТ'
		t.textContent = 'БОКС'
		fo.textContent = 'ІНДИВІДУАЛЬНІ ТРЕНУВАННЯ'
		fi.textContent = 'ГРУПОВІ ТРЕНУВАННЯ'
		si.textContent = 'РЕАБІЛІТАЦІЯ'
		ei.textContent = 'ЗАНЯТТЯ ДЛЯ ВАГІТНИХ'
		ni.textContent = 'МАСАЖ'
		awe.textContent = 'Контакти'
		qwer.textContent = 'Розташування'
		qwert.textContent = 'Соціальні мережі'
		qaz.textContent = 'м.Черкаси вул. Бульвар Шевченка 52'
		wsx.textContent = 'м.Черкаси вул. Смілянська 41'
		edc.textContent = 'м.Черкаси вул. Сумгаїтьська 2'
		fot_fot.textContent =
			'Cпортивний зал KURYLCHUK GYM ©2024 • Всі права захищені'
	} else if (element.textContent === 'ENG') {
		abon.textContent = 'Subscriptions'
		pers.textContent = 'Personnel'
		posl.textContent = 'Services'
		cont.textContent = 'Contacts'
		main.textContent = 'Main'
		title_main.textContent = 'Kurylchuk gym'
		title_main.style.marginLeft = '40%'
		first_slide.textContent = 'Kurylchuk gym'
		second_slide.textContent = 'Digital Technology'
		third_slide.textContent = 'Globalization'
		fourth_slide.textContent = 'New technologies'
		title_main_second.textContent = 'Subscriptions'
		every_day.forEach(function (element) {
			element.textContent = 'Every day'
		})
		but_det.forEach(function (element) {
			element.textContent = 'More details'
		})
		morning.textContent = 'MORNING'
		day.textContent = 'DAY'
		onetime.textContent = 'ONE-TIME-VISIT'
		even.textContent = 'EVENING'
		ten_visit.textContent = 'TEN-TIME-VISIT'
		group_train.textContent = 'GROUP TRAINING'
		mond_sund.textContent = 'Monday - Sunday'
		mond_frid.textContent = 'Monday - Friday'
		full.textContent = 'FULL'
		personal_train.textContent = 'PERSONAL TRAINING'
		title_personal.textContent = 'PERSONNEL'
		name_personal_1.textContent = 'Oleksandr Kovalchuk'
		name_personal_2.textContent = 'Kateryna Melnyk'
		name_personal_3.textContent = 'Olena Demchenko'
		name_personal_4.textContent = 'Nikita Bondarenko'
		name_personal_5.textContent = 'Yoon Soo Min'
		name_personal_6.textContent = 'Vitaly Shevchenko'
		n.textContent = 'Dmytro Levchenko'
		a.textContent = 'Vasyl Honcharuk'
		title_main_poslygi.textContent = 'Services'
		f.textContent = 'HEAVY ATHLETICS'
		s.textContent = 'CROSSFIT'
		t.textContent = 'BOXING'
		fo.textContent = 'INDIVIDUAL TRAINING'
		fi.textContent = 'GROUP TRAINING'
		si.textContent = 'REHABILITATION'
		ei.textContent = 'CLASSES FOR PREGNANT WOMEN'
		ni.textContent = 'MASSAGE'
		awe.textContent = 'Contacts'
		qwer.textContent = 'Location'
		qwert.textContent = 'Social networks'
		fot_fot.textContent = 'Sports gym KURYLCHUK GYM ©2024 • All rights reserved'
		qaz.textContent = 'Cherkasy, st. 52 Shevchenko Boulevard'
		wsx.textContent = 'Cherkasy str. Smilyanska 41'
		edc.textContent = 'Cherkasy str. Sumgaitska 2'
		card_buuton.forEach(function (element) {
			element.textContent = 'About coach'
		})
	}
}



function OpenMenu(){
	document.querySelector(".tel_ad").style.display = "block";
}

function ClosseTable(){
	document.querySelector('.tel_ad').style.display = 'none'
}