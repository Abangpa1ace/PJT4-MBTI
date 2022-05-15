export const clip = () => {
  // let url = '';
	// const textarea = document.createElement("textarea");
	// document.body.appendChild(textarea);
	// url = window.document.location.href;
	// textarea.value = url;
	// textarea.select();
	// document.execCommand("copy");
	// document.body.removeChild(textarea);
	navigator.clipboard.writeText(window.location.href);
}