function isLink(url: string): boolean {
	if((url.startsWith('http://') || url.startsWith('https://')) && url.includes('.')) {
		return true;
	}

	return false;
}

export { isLink };
