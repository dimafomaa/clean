$(document).ready(function() {

	$('input[type="tel"]').inputmask("+38 (999) 999-99-99");

	$('form').on('submit', function (e) {
		e.preventDefault(); // предотвращение стандартного поведения формы
		var form = $(this);

        // блокировка кнопки отправки формы
		form.find('button[type="submit"]').prop('disabled', true);
		
		
		let loadingIcon = document.querySelector('.loading-icon');
		loadingIcon.classList.add('active'); // show loading icon
		
		// отправка формы с помощью AJAX
		$.ajax({
			url: 'send-mail.php',
			type: 'POST',
			data: form.serialize(),
			success: function (data) {
				form[0].reset(); // очистка формы
				// Открываем модальное окно благодарности после успешной отправки формы
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
				
				
				loadingIcon.classList.remove('active');
				
			},
			
			
			
			complete: function() {
				// разблокировка кнопки отправки формы после завершения AJAX-запроса
				form.find('button[type="submit"]').prop('disabled', false);
			}
			
		});
	});

  
	// закрытие модального окна при нажатии на кнопку закрытия
	
});
