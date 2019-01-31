/**
 * Internal dependencies
 */
// import icons from './material-icons';

/**
 * WordPress dependencies
 */
const { _x } = wp.i18n;
const { SVG, Path } = wp.components;

/**
 * Generate icons from material.js
 */
const svgs = {
	outlined: {},
	filled: {},
};

const icons = {
	audiotrack : {
		label: _x( 'Audio', 'label' ),
		keywords: _x( 'music microphone podcast song artist creative media audio', 'tags' ),
		icon: <svg height="20" viewBox="0 0 14 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m10 0v11.7222222c-.65555556-.3777778-1.41111111-.6111111-2.22222222-.6111111-2.45555556 0-4.44444445 1.9888889-4.44444445 4.4444445 0 2.4555555 1.98888889 4.4444444 4.44444445 4.4444444 2.45555552 0 4.44444442-1.9888889 4.44444442-4.4444444v-11.11111116h4.4444445v-4.44444444z" transform="translate(-3)"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 14 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m10 0v11.7222222c-.65555556-.3777778-1.41111111-.6111111-2.22222222-.6111111-2.45555556 0-4.44444445 1.9888889-4.44444445 4.4444445 0 2.4555555 1.98888889 4.4444444 4.44444445 4.4444444 2.45555552 0 4.44444442-1.9888889 4.44444442-4.4444444v-11.11111116h4.4444445v-4.44444444zm-2.22222222 17.7777778c-1.22222222 0-2.22222222-1-2.22222222-2.2222222 0-1.2222223 1-2.2222223 2.22222222-2.2222223s2.22222222 1 2.22222222 2.2222223c0 1.2222222-1 2.2222222-2.22222222 2.2222222z" transform="translate(-3)"/></svg>,
	},
	keyboard_voice : {
		label: _x( 'Voice', 'label' ),
		keywords: _x( 'microphone podcast computer device music microphone song artist creative media audio', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="nonzero"><path d="m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm-1.26315789-9.57894732c0-.69473684.56842105-1.2631579 1.26315789-1.2631579.6947368 0 1.2631579.56842106 1.2631579 1.2631579l-.0105263 6.52631579c0 .69473683-.5578948 1.26315793-1.2526316 1.26315793-.69473684 0-1.26315789-.5684211-1.26315789-1.26315793zm6.84210529 6.42105263c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z"/><path d="m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm5.5789474-3.15789469c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z"/></g></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm-1.26315789-9.57894732c0-.69473684.56842105-1.2631579 1.26315789-1.2631579.6947368 0 1.2631579.56842106 1.2631579 1.2631579l-.0105263 6.52631579c0 .69473683-.5578948 1.26315793-1.2526316 1.26315793-.69473684 0-1.26315789-.5684211-1.26315789-1.26315793zm6.84210529 6.42105263c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z"/></svg>,
	},
	aperture : {
		label: _x( 'Aperture', 'label' ),
		keywords: _x( 'photo photographer photography camera film creative media', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7.4 8.5 4.77-8.26c-.7-.15-1.42-.24-2.17-.24-2.4 0-4.6.85-6.32 2.25l3.66 6.35zm12.14-1.5c-.92-2.92-3.15-5.26-6-6.34l-3.66 6.34zm.26 1h-7.49l.29.5 4.76 8.25c1.64-1.78 2.64-4.14 2.64-6.75 0-.69-.07-1.35-.2-2zm-13.26 2-3.9-6.75c-1.63 1.78-2.64 4.14-2.64 6.75 0 .69.07 1.35.2 2h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34l3.66-6.34zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12.25.26-.08-.04-.01.02c-.7-.15-1.42-.24-2.16-.24-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74zm5.16 6.74h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zm-6.31-4.92-2.83 4.92-1.15 2-2.72-4.7c1.44-1.42 3.42-2.3 5.6-2.3.37 0 .74.03 1.1.08zm-7.4 3.01 2.84 4.91 1.15 2h-5.43c-.16-.64-.26-1.31-.26-2 0-1.85.64-3.55 1.7-4.91zm-1.11 7.91h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7zm6.31 4.91 3.99-6.91 2.72 4.7c-1.45 1.42-3.43 2.3-5.61 2.3-.38 0-.74-.04-1.1-.09zm7.4-3-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91z"/></svg>,
	},
	camera : {
		label: _x( 'Camera', 'label' ),
		keywords: _x( 'photo photographer photography camera aperture film creative media', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7 1-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 3h-3.17l-1.83-2h-6l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14h-16v-12h4.05l1.83-2h4.24l1.83 2h4.05zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>,
	},
	gallery : {
		label: _x( 'Gallery', 'label' ),
		keywords: _x( 'photo photos image media camera aperture collection', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 13.8587524v-11.87893062c0-1.08890198-.8909198-1.97982178-1.9798218-1.97982178h-11.87893064c-1.08890198 0-1.97982178.8909198-1.97982178 1.97982178v11.87893062c0 1.088902.8909198 1.9798218 1.97982178 1.9798218h11.87893064c1.088902 0 1.9798218-.8909198 1.9798218-1.9798218zm-10.88901978-3.95964351 2.00951908 2.68265851 2.9400354-3.6725694 3.9596435 4.9495544h-11.87893064zm-9.11098022-5.89910889v14.028125c0 1.088902.8909198 1.9798218 1.97982178 1.9798218l14.02017822-.0079468v-1.9798218l-14.02017822.0079468v-14.028125z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 2v12h-12v-12zm0-2h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-8.5 9.67 1.69 2.26 2.48-3.1 3.33 4.17h-10zm-9.5-5.67v14c0 1.1.9 2 2 2h14v-2h-14v-14z"/></svg>,
	},
	video : {
		label: _x( 'Video', 'label' ),
		keywords: _x( 'film videography director producer media creative', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m16 2 2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-14z"/><path d="m3.76 8h14.24v8h-16v-11.53zm16.24-6h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z" fill-rule="nonzero"/></g></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3.76 8h14.24v8h-16v-11.53zm16.24-6h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z"/></svg>,
	},
	film : {
		label: _x( 'Film', 'label' ),
		keywords: _x( 'video videography director producer media creative camera photographer photography aperture', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.9047619 3.80952381c0-1.04761905-.8571429-1.90476191-1.9047619-1.90476191h-.95238095v-.95238095c0-.52380952-.42857143-.95238095-.95238095-.95238095h-3.80952381c-.52380953 0-.95238096.42857143-.95238096.95238095v.95238095h-.95238095c-1.04761905 0-1.9047619.85714286-1.9047619 1.90476191v14.28571429c0 1.047619.85714285 1.9047619 1.9047619 1.9047619h7.61904762c1.047619 0 1.9047619-.8571429 1.9047619-1.9047619h7.6190476v-14.28571429zm-1.9047619 12.38095239h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619zm3.8095238 8.57142858h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619zm3.8095238 8.57142858h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.9047619 3.80952381c0-1.04761905-.8571429-1.90476191-1.9047619-1.90476191h-.95238095v-.95238095c0-.52380952-.42857143-.95238095-.95238095-.95238095h-3.80952381c-.52380953 0-.95238096.42857143-.95238096.95238095v.95238095h-.95238095c-1.04761905 0-1.9047619.85714286-1.9047619 1.90476191v14.28571429c0 1.047619.85714285 1.9047619 1.9047619 1.9047619h7.61904762c1.047619 0 1.9047619-.8571429 1.9047619-1.9047619h7.6190476v-14.28571429zm5.7142857 12.38095239h-7.6190476v1.9047619h-7.61904762v-14.28571429h2.85714286v-1.90476191h1.9047619v1.90476191h2.85714286v1.9047619h7.6190476zm-10.47619046-2.8571429h1.90476191v1.9047619h-1.90476191zm0-6.66666663h1.90476191v1.9047619h-1.90476191zm3.80952386 6.66666663h1.9047619v1.9047619h-1.9047619zm0-6.66666663h1.9047619v1.9047619h-1.9047619zm3.8095238 6.66666663h1.9047619v1.9047619h-1.9047619zm0-6.66666663h1.9047619v1.9047619h-1.9047619z"/></svg>,
	},
	color_lens : {
		label: _x( 'Color Lens', 'label' ),
		keywords: _x( 'palette colors artist paint creative media', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m10 0c-5.52222222 0-10 4.47777778-10 10 0 5.5222222 4.47777778 10 10 10 .9222222 0 1.6666667-.7444444 1.6666667-1.6666667 0-.4333333-.1666667-.8222222-.4333334-1.1222222-.2555555-.2888889-.4222222-.6777778-.4222222-1.1 0-.9222222.7444445-1.6666667 1.6666667-1.6666667h1.9666666c3.0666667 0 5.5555556-2.4888888 5.5555556-5.55555551 0-4.91111111-4.4777778-8.88888889-10-8.88888889zm-6.11111111 10c-.92222222 0-1.66666667-.74444444-1.66666667-1.66666667 0-.92222222.74444445-1.66666666 1.66666667-1.66666666s1.66666667.74444444 1.66666667 1.66666666c0 .92222223-.74444445 1.66666667-1.66666667 1.66666667zm3.33333333-4.44444444c-.92222222 0-1.66666666-.74444445-1.66666666-1.66666667s.74444444-1.66666667 1.66666666-1.66666667 1.66666667.74444445 1.66666667 1.66666667-.74444445 1.66666667-1.66666667 1.66666667zm5.55555558 0c-.9222222 0-1.6666667-.74444445-1.6666667-1.66666667s.7444445-1.66666667 1.6666667-1.66666667 1.6666666.74444445 1.6666666 1.66666667-.7444444 1.66666667-1.6666666 1.66666667zm3.3333333 4.44444444c-.9222222 0-1.6666667-.74444444-1.6666667-1.66666667 0-.92222222.7444445-1.66666666 1.6666667-1.66666666s1.6666667.74444444 1.6666667 1.66666666c0 .92222223-.7444445 1.66666667-1.6666667 1.66666667z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m10 20c-5.51 0-10-4.49-10-10s4.49-10 10-10 10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5h1.77c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" fill-rule="nonzero"/><circle cx="4.5" cy="9.5" r="1.5"/><circle cx="7.5" cy="5.5" r="1.5"/><circle cx="12.5" cy="5.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/></g></svg>,
	},
	color_picker : {
		label: _x( 'Color Picker', 'label' ),
		keywords: _x( 'palette colors artist paint creative media', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.6750451 2.92459381-2.5996389-2.59963894c-.4332732-.43327316-1.133176-.43327316-1.5664491 0l-3.4661853 3.46618525-2.14414661-2.12192751-1.5664491 1.5664491 1.57755867 1.57755868-9.90973476 9.90973471v5.2770449h5.27704485l9.90973475-9.9097348 1.5775587 1.5775587 1.5664491-1.5664491-2.1330371-2.13303707 3.4661853-3.46618525c.4443827-.44438273.4443827-1.14428552.0111095-1.57755867zm-15.3200944 14.85349259-2.13303708-2.1330371 8.95431188-8.9543119 2.1330371 2.13303708z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16.2866269 2.68018331 1.0220802 1.02208026-2.9884738 2.98847383-1.0220803-1.02208027zm.0111095-2.67740592c-.2888487 0-.5665879.11109568-.7887793.32217748l-3.4661853 3.46618525-2.14414661-2.12192751-1.5664491 1.5664491 1.57755867 1.57755868-9.90973476 9.90973471v5.2770449h5.27704485l9.90973475-9.9097348 1.5775587 1.5775587 1.5664491-1.5664491-2.1330371-2.13303707 3.4661853-3.46618525c.4443827-.44438273.4443827-1.14428552.0111095-1.57755867l-2.5996389-2.59963894c-.2221914-.2110818-.4999306-.32217748-.7776698-.32217748zm-11.9427857 17.77530901-2.13303708-2.1330371 8.95431188-8.9543119 2.1330371 2.13303708z"/></svg>,
	},
	couch : {
		label: _x( 'Couch', 'label' ),
		keywords: _x( 'weekend chill relax chair', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18.1818182 7.87545455c-1.0045455 0-1.8181818.81363636-1.8181818 1.81818181v2.72727274h-12.72727276v-2.72727274c0-1.00454545-.81363637-1.81818181-1.81818182-1.81818181-1.00454546 0-1.81818182.81363636-1.81818182 1.81818181v5.14764964c0 1 .81818182 1.8181818 1.81818182 1.8181818h16.36363638c1 0 1.8181818-.8181818 1.8181818-1.8181818v-5.14764964c0-1.00454545-.8136364-1.81818181-1.8181818-1.81818181zm-2.7272727-4.54545455h-10.90909095c-1 0-1.81818182.81818182-1.81818182 1.81818182v1.95909091c1.05454545.37727272 1.81818182 1.37727272 1.81818182 2.55909091v1.84545456h10.90909095v-1.84545456c0-1.18181819.7636363-2.18181819 1.8181818-2.55909091v-1.95909091c0-1-.8181818-1.81818182-1.8181818-1.81818182z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m17.5 7.5v-1.66666667c0-1.375-1.125-2.5-2.5-2.5h-10c-1.375 0-2.5 1.125-2.5 2.5v1.66666667c-1.375 0-2.5 1.125-2.5 2.5v4.1666667c0 1.375 1.125 2.5 2.5 2.5h15c1.375 0 2.5-1.125 2.5-2.5v-4.1666667c0-1.375-1.125-2.5-2.5-2.5zm-13.33333333-1.66666667c0-.45833333.375-.83333333.83333333-.83333333h10c.4583333 0 .8333333.375.8333333.83333333v2.31666667c-.5083333.45833333-.8333333 1.11666667-.8333333 1.85v1.6666667h-10v-1.6666667c0-.73333333-.325-1.39166667-.83333333-1.85zm14.16666663 8.33333337c0 .4583333-.375.8333333-.8333333.8333333h-15c-.45833333 0-.83333333-.375-.83333333-.8333333v-4.1666667c0-.45833333.375-.83333333.83333333-.83333333s.83333333.375.83333333.83333333v3.3333333h13.33333337v-3.3333333c0-.45833333.375-.83333333.8333333-.83333333s.8333333.375.8333333.83333333z"/></svg>,
	},
	marker : {
		label: _x( 'Marker', 'label' ),
		keywords: _x( 'map directions about check checkbox', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m10 0c3.921743 0 7.114273 3.19253001 7.114273 7.11427301 0 4.95331259-6.1894175 11.86305029-6.4562027 12.15651399l-.6580703.729213-.65807025-.729213c-.26678524-.2934637-6.45620276-7.2032014-6.45620276-12.15651399 0-3.921743 3.19253001-7.11427301 7.11427301-7.11427301zm-1.36060471 9.04401956-1.56514007-1.5740329-1.26278345 1.26278346 2.82792352 2.82792348 5.34459761-5.34459756-1.2538906-1.26278346z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m10 0c-3.921743 0-7.11427301 3.19253001-7.11427301 7.11427301 0 4.95331259 6.18941752 11.86305029 6.45620276 12.15651399l.65807025.729213.6580703-.729213c.2667852-.2934637 6.4562027-7.2032014 6.4562027-12.15651399 0-3.921743-3.19253-7.11427301-7.114273-7.11427301zm0 17.3143619c-1.9386394-2.3210315-5.33570476-7.0520231-5.33570476-10.20008889 0-2.94353046 2.3921743-5.33570476 5.33570476-5.33570476 2.9435305 0 5.3357048 2.3921743 5.3357048 5.33570476 0 3.40595819-3.7794576 8.32369939-5.3357048 10.20008889zm-1.36060471-8.27034234-1.56514007-1.5740329-1.26278345 1.26278346 2.82792352 2.82792348 5.34459761-5.34459756-1.2538906-1.26278346z"/></svg>,
	},
	mountains : {
		label: _x( 'Mountains', 'label' ),
		keywords: _x( 'hills landscape minimal', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.8181818 4.54545455-3.40909089 4.54545454 2.59090909 3.45454541-1.45454545 1.0909091c-1.53636364-2.0454545-4.0909091-5.45454542-4.0909091-5.45454542l-5.45454545 7.27272732h20z" fill-rule="evenodd"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.8181818 4.54545455-3.83636362 5.11818181 1.13636364 1.51818184 2.69999998-3.60909093 4.5454546 6.06363633h-7.69090913l-3.64545454-4.88181815-5.02727273 6.70000005h20zm-8.18181816 9.09090905 1.38181818-1.8454545 1.38181818 1.8454545z"/></svg>,
	},
	waves : {
		label: _x( 'Waves', 'label' ),
		keywords: _x( '', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 16.6594678c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-5.604419c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-10.2550488c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.58zm-2.95 4.65062988c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/></svg>,
	},
	circle_add : {
		label: _x( 'Add Circle', 'label' ),
		keywords: _x( 'add minus circle insert plus round math', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m11 5h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-1-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></SVG>,
	},
	circle_remove : {
		label: _x( 'Minus Circle', 'label' ),
		keywords: _x( 'add minus circle insert plus round math', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5 11h-10v-2h10z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m5 9v2h10v-2zm5-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></SVG>,
	},
	data_usage : {
		label: _x( 'Pie Chart', 'label' ),
		keywords: _x( 'stats round circle pie chart graph', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m11 0v3.03759398c3.39.49122808 6 3.39849625 6 6.93734336 0 .90225566-.18 1.75438596-.48 2.54636596l2.6 1.5338345c.56-1.2431077.88-2.6265664.88-4.08020046 0-5.19298245-3.95-9.47368421-9-9.97493734zm-1 16.9924812c-3.87 0-7-3.1378446-7-7.01754386 0-3.53884711 2.61-6.44611528 6-6.93734336v-3.03759398c-5.06.50125313-9 4.77192982-9 9.97493734 0 5.53383456 4.47 10.02506266 9.99 10.02506266 3.31 0 6.24-1.6140351 8.06-4.1002506l-2.6-1.5338346c-1.28 1.60401-3.24 2.6265664-5.45 2.6265664z"/></SVG>,
	},
	scatter_plot : {
		label: _x( 'Scatter Plot', 'label' ),
		keywords: _x( 'stats round circle pie chart graph dots data', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m4.08163265 16.3265306c-2.25510204 0-4.08163265-1.8265306-4.08163265-4.0816326 0-2.25510208 1.82653061-4.08163269 4.08163265-4.08163269s4.08163266 1.82653061 4.08163266 4.08163269c0 2.255102-1.82653062 4.0816326-4.08163266 4.0816326zm7.08163265-8.16326529c-2.25510203 0-4.08163265-1.82653062-4.08163265-4.08163266s1.82653062-4.08163265 4.08163265-4.08163265c2.255102 0 4.0816327 1.82653061 4.0816327 4.08163265s-1.8265307 4.08163266-4.0816327 4.08163266zm4.7142857 11.83673469c-2.255102 0-4.0816326-1.8265306-4.0816326-4.0816327 0-2.255102 1.8265306-4.0816326 4.0816326-4.0816326 2.2551021 0 4.0816327 1.8265306 4.0816327 4.0816326 0 2.2551021-1.8265306 4.0816327-4.0816327 4.0816327z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m4.08163265 16.3265306c-2.25510204 0-4.08163265-1.8265306-4.08163265-4.0816326 0-2.25510208 1.82653061-4.08163269 4.08163265-4.08163269s4.08163266 1.82653061 4.08163266 4.08163269c0 2.255102-1.82653062 4.0816326-4.08163266 4.0816326zm0-6.122449c-1.12244898 0-2.04081632.9183674-2.04081632 2.0408164 0 1.1224489.91836734 2.0408163 2.04081632 2.0408163s2.04081633-.9183674 2.04081633-2.0408163c0-1.122449-.91836735-2.0408164-2.04081633-2.0408164zm7.08163265-2.04081629c-2.25510203 0-4.08163265-1.82653062-4.08163265-4.08163266s1.82653062-4.08163265 4.08163265-4.08163265c2.255102 0 4.0816327 1.82653061 4.0816327 4.08163265s-1.8265307 4.08163266-4.0816327 4.08163266zm0-6.12244898c-1.122449 0-2.04081632.91836734-2.04081632 2.04081632s.91836732 2.04081633 2.04081632 2.04081633 2.0408163-.91836735 2.0408163-2.04081633-.9183673-2.04081632-2.0408163-2.04081632zm4.7142857 17.95918367c-2.255102 0-4.0816326-1.8265306-4.0816326-4.0816327 0-2.255102 1.8265306-4.0816326 4.0816326-4.0816326 2.2551021 0 4.0816327 1.8265306 4.0816327 4.0816326 0 2.2551021-1.8265306 4.0816327-4.0816327 4.0816327zm0-6.122449c-1.122449 0-2.0408163.9183674-2.0408163 2.0408163 0 1.122449.9183673 2.0408164 2.0408163 2.0408164s2.0408163-.9183674 2.0408163-2.0408164c0-1.1224489-.9183673-2.0408163-2.0408163-2.0408163z"/></SVG>,
	},
	emoticon : {
		label: _x( 'Emoticon', 'label' ),
		keywords: _x( 'happy emotion emoticon smile fun joy', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m9.99 0c5.53 0 10.01 4.48 10.01 10s-4.48 10-10.01 10c-5.52 0-9.99-4.48-9.99-10s4.47-10 9.99-10zm3.51 9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m9.99 0c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z"/></SVG>,
	},
	functions : {
		label: _x( 'Functions', 'label' ),
		keywords: _x( 'code greek math', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m17.9645996 0h-15.99999999v2.5l8.12499999 7.5-8.12499999 7.5v2.5h15.99999999v-3.75h-9.74999999l6.24999999-6.25-6.24999999-6.25h9.74999999z" fill-rule="evenodd"/></SVG>,
	},
	gesture : {
		label: _x( 'Doodle', 'label' ),
		keywords: _x( 'drawing doodle art creative type font pencil marker', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m1.92731278 4.32703003c.77092511-.7897664 1.54185022-1.50166852 1.88325991-1.3570634.55066079.22246941 0 1.14571746-.33039648 1.69076752-.2753304.46718576-3.14977973 4.32703003-3.14977973 7.01890985 0 1.4238043.52863436 2.6028922 1.47577092 3.3147943.82599119.6229143 1.91629956.8120133 2.90748899.5116796 1.17841409-.3448276 2.14757709-1.5572859 3.37004405-3.0812013 1.33259912-1.6573971 3.11674006-3.82647389 4.49339206-3.82647389 1.7951542 0 1.8171806 1.12347053 1.938326 1.99110119-4.1629956.7119022-5.92511013 4.0823137-5.92511013 5.9733037s1.58590313 3.4371524 3.53524233 3.4371524c1.7951541 0 4.7246696-1.4794216 5.1651982-6.785317h2.7092511v-2.7808676h-2.7202643c-.1651983-1.83537269-1.2004405-4.67185767-4.438326-4.67185767-2.4779736 0-4.60352424 2.12458287-5.44052864 3.15906563-.63876652.81201335-2.26872247 2.75862064-2.52202643 3.02558394-.2753304.3337042-.74889868.9343716-1.22246696.9343716-.49559472 0-.79295155-.9232481-.39647578-2.1357064.38546256-1.21245826 1.54185022-3.18131254 2.03744494-3.9154616.85903084-1.26807564 1.43171806-2.13570634 1.43171806-3.64849833 0-2.4137931-1.8061674-3.18131257-2.76431718-3.18131257-1.45374449 0-2.72026432 1.11234705-2.99559471 1.39043382-.39647577.40044493-.72687225.73414905-.969163 1.03448275zm10.23127752 12.96996667c-.3414097 0-.814978-.2892103-.814978-.8008899 0-.6674082.8039648-2.4471635 3.160793-3.0700779-.3303965 2.9922136-1.5748899 3.8709678-2.345815 3.8709678z"/></SVG>,
	},
	font : {
		label: _x( 'Font', 'label' ),
		keywords: _x( '', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7.93 11.5h4.14l-2.07-5.52zm10.07-11.5h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3h-5.64l-1.12 3h-2.09l5.11-13h1.86l5.11 13z"/></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7.17 13.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09zm2.83-7.52 2.07 5.52h-4.14zm8-5.98h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm0 18h-16v-16h16z"/></svg>,
	},
	heart : {
		label: _x( 'Heart', 'label' ),
		keywords: _x( 'love shape valentine kiss', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m10 20-1.45-1.4386921c-5.15-5.0899183-8.55-8.4468665-8.55-12.56675749 0-3.35694823 2.42-5.99455041 5.5-5.99455041 1.74 0 3.41.88283379 4.5 2.27792916 1.09-1.39509537 2.76-2.27792916 4.5-2.27792916 3.08 0 5.5 2.63760218 5.5 5.99455041 0 4.11989099-3.4 7.47683919-8.55 12.57765669" fill-rule="evenodd"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m14.5 0c-1.74 0-3.41.88283379-4.5 2.27792916-1.09-1.39509537-2.76-2.27792916-4.5-2.27792916-3.08 0-5.5 2.63760218-5.5 5.99455041 0 4.11989099 3.4 7.47683919 8.55 12.57765669l1.45 1.4277929 1.45-1.4386921c5.15-5.0899183 8.55-8.4468665 8.55-12.56675749 0-3.35694823-2.42-5.99455041-5.5-5.99455041zm-4.4 16.9482289-.1.1089918-.1-.1089918c-4.76-4.6975477-7.9-7.80381473-7.9-10.95367849 0-2.17983651 1.5-3.8147139 3.5-3.8147139 1.54 0 3.04 1.07901908 3.57 2.57220709h1.87c.52-1.49318801 2.02-2.57220709 3.56-2.57220709 2 0 3.5 1.63487739 3.5 3.8147139 0 3.14986376-3.14 6.25613079-7.9 10.95367849z"/></SVG>,
	},
	desktop_mac : {
		label: _x( 'Desktop', 'label' ),
		keywords: _x( 'computer apple montior device pc desk office', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m18.1818182 0h-16.36363638c-1 0-1.81818182.81818182-1.81818182 1.81818182v12.90909088c0 1 .81818182 1.8181818 1.81818182 1.8181818h6.36363636l-1.81818182 2.7272728v.9090909h7.27272724v-.9090909l-1.8181818-2.7272728h6.3636364c1 0 1.8181818-.8181818 1.8181818-1.8181818v-12.90909088c0-1-.8181818-1.81818182-1.8181818-1.81818182z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m18.1818182 0h-16.36363638c-1 0-1.81818182.81818182-1.81818182 1.81818182v12.90909088c0 1 .81818182 1.8181818 1.81818182 1.8181818h6.36363636l-1.81818182 2.7272728v.9090909h7.27272724v-.9090909l-1.8181818-2.7272728h6.3636364c1 0 1.8181818-.8181818 1.8181818-1.8181818v-12.90909088c0-1-.8181818-1.81818182-1.8181818-1.81818182zm0 12.9090909h-16.36363638v-11.09090908h16.36363638z"/></SVG>,
	},
	laptop_mac : {
		label: _x( 'Laptop', 'label' ),
		keywords: _x( 'computer apple montior device pc desk office', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m16.6666667 15c.9166666 0 1.6583333-.75 1.6583333-1.6666667l.0083333-9.16666663c0-.91666667-.75-1.66666667-1.6666666-1.66666667h-13.33333337c-.91666666 0-1.66666666.75-1.66666666 1.66666667v9.16666663c0 .9166667.75 1.6666667 1.66666666 1.6666667h-3.33333333c0 .9166667.75 1.6666667 1.66666667 1.6666667h16.66666663c.9166667 0 1.6666667-.75 1.6666667-1.6666667zm-13.33333337-10.83333333h13.33333337v9.16666663h-13.33333337zm6.66666667 11.66666663c-.45833333 0-.83333333-.375-.83333333-.8333333s.375-.8333333.83333333-.8333333c.4583333 0 .8333333.375.8333333.8333333s-.375.8333333-.8333333.8333333z"/></SVG>,
	},
	tablet_mac : {
		label: _x( 'Tablet', 'label' ),
		keywords: _x( 'computer ipad surface apple montior device pc desk office', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m15.8333333 0h-11.66666663c-1.15 0-2.08333334.93333333-2.08333334 2.08333333v15.83333337c0 1.15.93333334 2.0833333 2.08333334 2.0833333h11.66666663c1.15 0 2.0833334-.9333333 2.0833334-2.0833333v-15.83333337c0-1.15-.9333334-2.08333333-2.0833334-2.08333333zm-5.8333333 19.1666667c-.69166667 0-1.25-.5583334-1.25-1.25 0-.6916667.55833333-1.25 1.25-1.25.6916667 0 1.25.5583333 1.25 1.25 0 .6916666-.5583333 1.25-1.25 1.25zm6.25-3.3333334h-12.5v-13.3333333h12.5z"/></SVG>,
	},
	watch : {
		label: _x( 'Watch', 'label' ),
		keywords: _x( 'device apple mac', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="nonzero"><path d="m16.6666667 10c0-2.11666667-.9916667-4.00833333-2.5333334-5.225l-.8-4.775h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225zm-11.6666667 0c0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5-2.75833333 0-5-2.2416667-5-5z"/><path d="m11.925 1.66666667.3416667 2.06666666c-.7083334-.25833333-1.4666667-.4-2.2666667-.4-.79166667 0-1.55833333.14166667-2.25833333.39166667l.34166666-2.05833333zm.3416667 14.60000003-.3416667 2.0666666h-3.84166667l-.34166666-2.0583333c.7.25 1.46666666.3916667 2.25833333.3916667.8 0 1.5583333-.1416667 2.2666667-.4zm1.0666666-16.2666667h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225 0-2.11666667-.9916667-4.00833333-2.5333334-5.225zm-3.3333333 15c-2.75833333 0-5-2.2416667-5-5 0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5z"/></g></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.925 1.66666667.3416667 2.06666666c-.7083334-.25833333-1.4666667-.4-2.2666667-.4-.79166667 0-1.55833333.14166667-2.25833333.39166667l.34166666-2.05833333zm.3416667 14.60000003-.3416667 2.0666666h-3.84166667l-.34166666-2.0583333c.7.25 1.46666666.3916667 2.25833333.3916667.8 0 1.5583333-.1416667 2.2666667-.4zm1.0666666-16.2666667h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225 0-2.11666667-.9916667-4.00833333-2.5333334-5.225zm-3.3333333 15c-2.75833333 0-5-2.2416667-5-5 0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5z"/></svg>,
	},
	device_hub : {
		label: _x( 'Hub', 'label' ),
		keywords: _x( 'usb connect hub device social', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m15.5555556 14.4444444-4.4444445-4.4444444v-3.53333333c1.2888889-.46666667 2.2222222-1.68888889 2.2222222-3.13333334 0-1.84444444-1.4888889-3.33333333-3.3333333-3.33333333-1.84444444 0-3.33333333 1.48888889-3.33333333 3.33333333 0 1.44444445.93333333 2.66666667 2.22222222 3.13333334v3.53333333l-4.44444445 4.4444444h-4.44444444v5.5555556h5.55555556v-3.3888889l4.44444444-4.6666667 4.4444444 4.6666667v3.3888889h5.5555556v-5.5555556z" fill-rule="evenodd"/></SVG>,
	},
	drafts : {
		label: _x( 'Email', 'label' ),
		keywords: _x( 'email mail os read letter', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m19.99 7c0-.72-.37-1.35-.94-1.7l-9.05-5.3-9.05 5.3c-.57.35-.95.98-.95 1.7v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-9.99 5-8.26-5.16 8.26-4.84 8.26 4.84z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m19.99 7c0-.72-.37-1.35-.94-1.7l-9.05-5.3-9.05 5.3c-.57.35-.95.98-.95 1.7v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0v.01l-7.99 4.99-8-5 8-4.68zm-15.99 11v-8.66l8 5.02 7.99-4.99.01 8.63z"/></SVG>,
	},
	reply_all : {
		label: _x( 'Reply', 'label' ),
		keywords: _x( '', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m5.83333333 6.66666667v-2.5l-5.83333333 5.83333333 5.83333333 5.8333333v-2.5l-3.33333333-3.3333333zm4.99999997.83333333v-3.33333333l-5.8333333 5.83333333 5.8333333 5.8333333v-3.4166666c4.1666667 0 7.0833334 1.3333333 9.1666667 4.25-.8333333-4.1666667-3.3333333-8.33333337-9.1666667-9.1666667z"/></svg>,
	},
	send : {
		label: _x( 'Send', 'label' ),
		keywords: _x( '', 'tags' ),
		icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m.00952381 18.5714286 19.99047619-8.5714286-19.99047619-8.57142857-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619z"/><path d="m1.91428571 4.31428571 7.15238096 3.06666667-7.16190477-.95238095zm7.14285715 8.30476189-7.15238096 3.0666667v-2.1142857zm-9.04761905-11.19047617-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619.00952381 6.6666667 19.99047619-8.5714286z" fill-rule="nonzero"/></g></svg>,
		icon_outlined: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m1.91428571 4.31428571 7.15238096 3.06666667-7.16190477-.95238095zm7.14285715 8.30476189-7.15238096 3.0666667v-2.1142857zm-9.04761905-11.19047617-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619.00952381 6.6666667 19.99047619-8.5714286z"/></svg>,
	},
	signal : {
		label: _x( 'Signal', 'label' ),
		keywords: _x( 'wifi radio waves', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m10 8.675c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zm-6-10c-5.52 0-10 4.48-10 10 0 3.7 2.01 6.92 4.99 8.65l1-1.73c-2.38-1.39-3.99-3.96-3.99-6.92 0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"/></SVG>,
	},
	boxes : {
		label: _x( 'Boxes', 'label' ),
		keywords: _x( 'blocks block box square build widgets', 'tags' ),
		icon: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m10.3519669 11.7141378v8.2858622h8.2815735v-8.2858622zm-10.3519669 8.2858622h8.2815735v-8.2858622h-8.2815735zm0-18.64319006v8.28586225h8.2815735v-8.28586225zm14.1407867-1.35680994-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759z"/></SVG>,
		icon_outlined: <SVG height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><Path d="m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z"/></SVG>,
	},
	// key : {
	// 	label: _x( '', 'label' ),
	// 	keywords: _x( '', 'tags' ),
	// 	icon: ,
	// 	icon_outlined: ,
	// },
};

Object.entries( icons ).filter( function( item ) {

	svgs.filled[ item[0] ] = {
		icon: ( icons[ item[0] ] ) ? icons[ item[0] ].icon : null,
		label : ( icons[ item[0] ] ) ? icons[ item[0] ].label : null,
		keywords : ( icons[ item[0] ] ) ? icons[ item[0] ].keywords : null,
	}

	svgs.outlined[ item[0] ] = {
		icon: ( icons[ item[0] ] && icons[ item[0] ].icon_outlined ) ? icons[ item[0] ].icon_outlined : icons[ item[0] ].icon,
		label : ( icons[ item[0] ] ) ? icons[ item[0] ].label : null,
		keywords : ( icons[ item[0] ] ) ? icons[ item[0] ].keywords : null,
	}
});

export default svgs;
