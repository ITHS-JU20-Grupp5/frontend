<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<h2>Successfully registered</h2>
					</div>

					<div class="modal-body">
						Check your email for the verification link!
					</div>

					<div class="modal-footer">
						<button id="close-button" class="button" @click="$emit('close')">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'ModalRegister',
};
</script>

<style scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 90vw;
	max-width: 650px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.modal-header {
	text-align: center;
}

.modal-body {
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	line-height: 3rem;
}

.modal-body > * {
	margin: 1rem 0;
	padding: 0.25rem 0.5rem;
}

.modal-footer {
	display: flex;
	justify-content: space-between;
}

.anchor-footer {
	color: black;
	text-decoration: none;
	cursor: default;
}

.button-footer:active,
.button-footer:focus {
	outline: none;
}

.button-footer:hover {
	transform: scale(1.02);
}

.highlight {
	border-radius: 4px;
	background-color: rgba(0, 178, 72, 0.5);
	padding: 0.25rem 0.5rem;
}

#score {
	background-color: whitesmoke;
	border-radius: 5px;
	box-shadow: 2px 3px 9px gray;
}

#chooseCategory {
	text-align: center;
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
