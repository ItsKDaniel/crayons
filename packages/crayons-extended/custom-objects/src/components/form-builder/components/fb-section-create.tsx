import { Component, h, Prop } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';

@Component({
  tag: 'fb-section-create',
  styleUrl: 'fb-section-create.scss',
  shadow: true,
})
export class FormBuilderSection {
  /*
   * Handler function to create a new section
   */
  @Prop() setSectionsExpandStateHandler;
  /**
   * data source used to set and edit the field values
   */
  @Prop({ mutable: true }) dataProvider = null;

  render() {
    const options = this.dataProvider.choices.map((choice) => {
      return { text: choice.value, value: choice.value };
    });
    return (
      <section class='fb-section'>
        <header>
          <h4 class='fb-section-add'>
            {TranslationController.t('formBuilder.sections.new')}
          </h4>
          <p class='fb-section-description'>
            <span>
              {TranslationController.t(
                'formBuilder.sections.sectionDescription'
              )}
            </span>
            <fw-button color='link'>
              {TranslationController.t(
                'formBuilder.fieldTypeRelationshipDescLinkLabel'
              )}
            </fw-button>
          </p>
        </header>
        <div class='fb-section-content'>
          <div class='fb-section-content-create'>
            {' '}
            <fw-input
              label='Name'
              placeholder='Section Name'
              class='fb-section-content-name'
            ></fw-input>
            <div class='fb-section-content-divider'></div>
            <fw-select
              class='fb-section-content-value'
              label='Show section if Type is'
              value={options[0].text}
              options={options}
            ></fw-select>{' '}
          </div>
        </div>
        <footer>
          <fw-button color='primary'>
            {' '}
            {TranslationController.t('formBuilder.sections.save')}{' '}
          </fw-button>
          <fw-button
            color='secondary'
            onFwClick={() => {
              this.setSectionsExpandStateHandler(true, false);
            }}
          >
            {' '}
            {TranslationController.t('formBuilder.sections.cancel')}{' '}
          </fw-button>
        </footer>
      </section>
    );
  }
}
