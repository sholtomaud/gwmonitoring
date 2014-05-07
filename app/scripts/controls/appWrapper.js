module.exports = function(app){
    var views = app.views,
        actions = app.actions,
        behaviours = app.behaviours;

    function createDataEntryForm(){
        var selectedForm = new views.Frame();
        //selectedForm.url.value = 'github/chforms/app/build/pages/form1.json';
        
        //selectedForm.url.value = 'build/pages/form1.json';
        selectedForm.url.value = 'build/pages/aquifer.json';

        /*

            the Frame view loads a chunk of UI based on its url.

            Change this to be a binding which loads the correct form.

        */

        return selectedForm;
    }

    // Make the apps UI
    function createHeader(){
      var headerTemplate = new views.Container(),
        header = new views.Header();

        header.text.value = 'Ground Water Bores Data Forms';

        headerTemplate.views.content.add([
          header
        ]);

        return headerTemplate;
    }

    // Make the app footer
    function stickyFooter(){
      var footerTemplate = new views.Container(),
        banner = new views.Image(),
        footer = new views.Textbox();

        banner.source.value = 'images/chromicon_logo_small.png';

        footerTemplate.views.content.add([
          banner
        ]);

        footerTemplate.classes.value = 'footer';
        return footerTemplate;
    }

    // Make the apps UI
    function createControls(){

        var controlsTemplate = new views.Container(),
            backButton = new views.Button(),
            newRecordButton = new views.Button(),
            editRecordButton = new views.Button(),
            cancelButton = new views.Button(),
            saveRecordButton = new views.Button(),
            nextButton = new views.Button(),
            searchBox = new views.Textbox(),
            deleteRecordButton = new views.Button(),
            enableForm = new actions.Set(),
            disableForm = new actions.Set(),
            addNewRecord = new actions.Push(),
            saveRecord = new actions.Set(),
            addRecordIfNotEmpty = new actions.Conditional(),
            clearNewRecord = new actions.Remove();


        backButton.text.value = '<- Back';
        newRecordButton.text.value = 'New Record';
        editRecordButton.text.value = 'Edit';
        cancelButton.text.value = 'Cancel';
        saveRecordButton.text.value = 'Save';
        nextButton.text.value = 'Next ->';
        searchBox.placeholder.value = 'Search...';
        deleteRecordButton.text.value = 'Delete';

        enableForm.source.value = 'true' ;
        enableForm.target.binding = '[/fieldsEnabled]';

        disableForm.source.value = 'false' ;
        disableForm.target.binding = '[/fieldsEnabled]';

        editRecordButton.actions.click = [enableForm];
        newRecordButton.actions.click = [enableForm];

        saveRecord.source.binding = '(object "record" (? (filter [] {fields fields.value}) (filter [/ui] {fields fields.table_field}) ) )';
        saveRecord.target.binding = '[/data]';

        cancelButton.actions.click = [disableForm];
        saveRecordButton.actions.click = [disableForm,saveRecord];

        controlsTemplate.views.content.add([
            newRecordButton,
            editRecordButton,
            saveRecordButton,
            backButton,
            nextButton,
            cancelButton,
            searchBox,
            deleteRecordButton
        ]);

        controlsTemplate.classes.value = 'controls';
        return controlsTemplate;

    }

    // Make the apps UI
    function createFormView(){
        var appWrapper = new views.Container();

        appWrapper.views.content.add([
            //createHeader(),
            createControls(),
            createDataEntryForm()
        ]);
        appWrapper.classes.value = 'app'
        return appWrapper;
    }

    function createAppBehaviours(){
        var onLoadBehaviour = new behaviours.PageLoad(),
            retieveLocalData = new actions.BrowserStorage(),
            persistDataOnChange = new behaviours.ModelChange(),
            persistData = new actions.BrowserStorage(),
            active = new actions.Set(),
            updateDisabled = new actions.Set(),
            setActiveRecord = new actions.Set(),
            ttoggleDisabled = new behaviours.ModelChange();

        updateDisabled.source.binding = '[/fieldsEnabled]';
        updateDisabled.target.binding = '[]';

        ttoggleDisabled.watch.binding = '[/fieldsEnabled]';
        ttoggleDisabled.actions.change = [updateDisabled];

        active.source.value = 0;
        active.target.value = '[/activeNo]';

        retieveLocalData.source.value = 'data';
        retieveLocalData.method.value = 'get';
        retieveLocalData.target.binding = '[/data]';

        onLoadBehaviour.actions.load = [retieveLocalData];

        persistData.source.binding = '[/data]';
        persistData.method.value = 'set';
        persistData.target.value = 'data';

        persistDataOnChange.watch.binding = '[/data]';
        persistDataOnChange.actions.change = [persistData];

        return [
            onLoadBehaviour,
            persistDataOnChange
        ];
    }

    function createView(){
        var appView = new views.Container();

        appView.views.content.add([
            //createHeader(),
            createFormView(),
            stickyFooter()
        ]);

        appView.classes.value = 'app';
        appView.behaviours = createAppBehaviours();

        return appView;
    }

    return createView;
};