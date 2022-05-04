export const clip = (): void => {
  let url = '';
	const textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert('링크가 복사되었습니다.')
}