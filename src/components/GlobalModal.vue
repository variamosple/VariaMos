<!--
 @author Daniel Correa <dcorreab@eafit.edu.co>
-->
<template>
  <!-- Modal -->
  <div class="modal fade" id="gmodal" tabindex="-1" role="dialog"
    aria-labelledby="gmodal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div id="gmodal-header">
          <h5 class="modal-title" id="gmodal-label">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body" id="gmodal-body"></div>

        <div id="modal-spinner" class="justify-content-center v-display mbottom20">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div class="modal-footer">
          <button id="gmodal-button-close" v-on:click="closeAction" type="button"
            class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="gmodal-button-confirm" v-on:click="confirmAction"
            class="btn btn-primary gmodal-button-confirm" type="button">Confirm</button>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->
    <button id="gmodal-button" style="display:none" data-toggle="modal" data-target="#gmodal">
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class AppModal extends Vue {
    public title:string = '';

    public mainAction:any = null;

    public secondaryAction:any = null;

    public secondaryMessage:boolean = false;

    public spinnerActive:boolean = true;

    public setData(type:string, title:string, content:any, buttonType:string = 'normal',
      mainAction:any = null, secondaryAction:any = null) {
      this.secondaryMessage = false;
      this.mainAction = null;
      this.secondaryAction = null;
      this.spinnerActive = true;
      const confirmButton = document.getElementById('gmodal-button-confirm');
      const modalBody = document.getElementById('gmodal-body');
      const spinner = document.getElementById('modal-spinner');
      if (spinner) {
        spinner.style.display = 'none';
      }

      if (confirmButton) {
        confirmButton.innerHTML = 'Confirm';
      }

      // set content
      if (modalBody) {
        modalBody.innerHTML = '';
        // if content is an HTMLElement, it is appended inside the modalbody
        if (content instanceof HTMLElement) {
          modalBody.appendChild(content);
        } else { // if content is text, the text is applied to the modalbody
          modalBody.innerHTML = content;
        }
      }

      // set custom action
      if (confirmButton) {
        confirmButton.style.display = 'none';
        if (buttonType == 'confirm') {
          confirmButton.style.display = 'block';
          this.mainAction = mainAction;
        }
      }

      // set secondary action
      if (secondaryAction) {
        this.secondaryAction = secondaryAction;
      }

      // set type and title
      this.setType(type);
      this.title = title;
    }

    public setSpinnerActive(spinner:boolean) {
      this.spinnerActive = spinner;
    }

    public setSecondaryMessage(secondary:boolean) {
      this.secondaryMessage = secondary;
    }

    public setConfirmButtonText(text:string) {
      const confirmButton = document.getElementById('gmodal-button-confirm');
      if (confirmButton) {
        confirmButton.innerHTML = text;
      }
    }

    public setType(type:string) {
      const modalHeader = document.getElementById('gmodal-header');
      if (modalHeader) {
        if (type == 'error') {
          modalHeader.className = 'modal-header bg-danger text-white';
        } else if (type == 'success') {
          modalHeader.className = 'modal-header bg-success text-white';
        } else if (type == 'warning') {
          modalHeader.className = 'modal-header bg-warning text-white';
        } else {
          modalHeader.className = 'modal-header bg-primary text-white';
        }
      }
    }

    public closeAction() {
      if (this.secondaryAction) {
        const spinner = document.getElementById('modal-spinner') as any;
        if (this.spinnerActive) {
          spinner.style.display = 'flex';
        }
        setTimeout(() => {
          this.secondaryAction();
          this.click();
        }, 100);
      }
    }

    public confirmAction() {
      if (this.mainAction) {
        const spinner = document.getElementById('modal-spinner') as any;
        if (this.spinnerActive) {
          spinner.style.display = 'flex';
        }
        setTimeout(() => {
          this.mainAction();
          if (!this.secondaryMessage) {
            this.click();
          }
        }, 100);
      }
    }

    public click() {
      const modal = document.getElementById('gmodal-button');
      if (modal) {
        modal.click();
      }
    }
}
</script>

<style>
.gmodal-button-confirm{
  display:none;
}

.modal-content{
  border: 0px !important;
}

.mbottom20{
  margin-bottom: 20px;
}

.v-display{
  display: none;
}
</style>
