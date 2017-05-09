module.exports = {
    standardversion: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts', dest: "standardversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts', dest: "standardversion/assets/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/themify-icons/fonts', dest: "standardversion/assets/css/fonts"},
            {expand: true, src: "**", cwd: 'STANDARD/templates',     dest: "standardversion/templates"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/api',     dest: "standardversion/assets/api"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/i18n',    dest: "standardversion/assets/i18n"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/images',     dest: "standardversion/assets/images"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/config',      dest: "standardversion/assets/js/config"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/directives',      dest: "standardversion/assets/js/directives"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/controllers',      dest: "standardversion/assets/js/controllers"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/js/filters',      dest: "standardversion/assets/js/filters"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/views',     dest: "standardversion/assets/views"},
            {expand: true, src: "**", cwd: 'STANDARD/assets/css/themes',     dest: "standardversion/assets/css/themes"},
            {src: 'STANDARD/master/_index.min.html', dest : 'standardversion/index.html'},
            {src: 'STANDARD/upload.php', dest : 'standardversion/upload.php'}
        ]
    }

};
