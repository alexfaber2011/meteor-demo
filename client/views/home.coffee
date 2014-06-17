Template.home.events
  "click #addSpecial": ->
    addSpecialModal =
      template: Template.addSpecial
      title: "Add Special"
      buttons:
        cancle:
          closeModalOnClick: yes # if this is false, dialog doesn't close automatically on click
          class: "btn-close"
          label: "close"
    rd_offer = ReactiveModal.initDialog(addSpecialModal)
    rd_offer.show()