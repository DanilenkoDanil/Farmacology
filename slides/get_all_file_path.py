import os


def get_all_png_file_paths(root_folder):
    png_paths = []
    for root, _, files in os.walk(root_folder):
        for file in files:
            if file.lower().endswith('.png'):  # Проверяем расширение файла
                png_paths.append(os.path.join(root, file))
    return png_paths


def save_to_file(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as f:
        for line in data:
            f.write(line + '\n')


def save_to_file(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as f:
        for line in data:
            f.write(line + '\n')


if __name__ == "__main__":
    base_folder = r"D:\Farmacology\slides"  # Укажите путь к корню проекта
    output_file = r"folder_paths.txt"  # Укажите имя выходного файла

    all_folder_paths = get_all_png_file_paths(base_folder)
    save_to_file(output_file, all_folder_paths)

    print(f"Найдено {len(all_folder_paths)} папок. Пути сохранены в {output_file}.")