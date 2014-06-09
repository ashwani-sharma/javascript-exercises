var checkAllBoxes = function (className) {
		 this.checkBoxes = document.getElementsByClassName(className);
	}

	checkAllBoxes.prototype.checkAll = function (status) {
		for(var i = 0; i<=this.checkBoxes.length; i++) {
			this.checkBoxes[i].checked = status;
		}
	}

	var checkResult = new checkAllBoxes("children");