/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, } = wp.editor;
const { PanelBody, RangeControl, ToggleControl, SelectControl  } = wp.components;


/**
 * Inspector controls
 */
class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			clientId,
			attributes,
			setAttributes,
		} = this.props;

		const {
			items,
			gutter,
			stacked,
		} = attributes;

		const gutterOptions = [
			{ value: 'no', label: __( 'None' ) },
			{ value: 'small', label: __( 'Small' ) },
			{ value: 'medium', label: __( 'Medium' ) },
			{ value: 'large', label: __( 'Large' ) },
			{ value: 'huge', label: __( 'Huge' ) },
		];

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Buttons Settings' ) } className='components-coblocks-block-sidebar--buttons'>
						<RangeControl
							label={ __( 'Buttons' ) }
							value={ items }
							onChange={ ( nextCount ) => {
								setAttributes( {
									items: parseInt( nextCount ),
								} );

								if( parseInt( nextCount ) < 2 ){
									setAttributes( {
										gutter: 'no',
									} );
								}else{
									if( gutter == 'no' ){
										setAttributes( {
											gutter: 'medium',
										} );
									}
								}

								wp.data.dispatch( 'core/editor' ).selectBlock( clientId );
							} }
							min={ 1 }
							max={ 4 }
						/>
						{ items >= 2 &&
							<SelectControl
								label={ __( 'Gutter' ) }
								value={ gutter }
								options={ gutterOptions }
								help={ __( 'Space between each button.' ) }
								onChange={ ( value ) => setAttributes( { gutter: value } ) }
							/>
						}
						<ToggleControl
							label={ __( 'Stack buttons' ) }
							checked={ !! stacked }
							onChange={ () => setAttributes( {  stacked: ! stacked } ) }
							help={ !! stacked ? __( 'Aligning buttons in a single column.' ) : __( 'Toggle to align buttons in a column.' ) } />
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
