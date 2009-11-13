function objectTag() {
	var 
		selection = ts.getSelection(false, false).replace(/\s*[\r\n]\s*/mg, ''), 
		text = zen_coding.parseIntoTree( selection, zen_coding.getEditorType() )
	
	if (!text)
		return ''

	text = text.toString(true)

	// ������� ��� ������� | (������� �������), ����� �������.
	var cursor_pos = text.indexOf('|')
	if (cursor_pos!=-1) {
		text = text.substring(0, cursor_pos+1).concat( text.substring(cursor_pos+1).replace(/\|/gm, '') )
	}

	// ���� ��������� �������� ������ ����� - ��������� ���.
	return zen_coding.getCurrentLinePadding() + text 
}