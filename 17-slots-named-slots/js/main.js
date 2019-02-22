Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
                <section class="alerta" :class="[tipo, posicion]">
                    <header class="alerta__header">
                        <slot name="header">Hola</slot>
                    </header>
                    <div class="alerta__contenido">
                        <slot>
                            Lorem itsum dolor sit amet, ...
                        </slot>
                    </div>
                    <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                    </footer>
                </section>
    `,
});

new Vue({
    el: 'main',
});