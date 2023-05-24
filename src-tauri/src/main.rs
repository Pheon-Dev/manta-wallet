// #![allow(unused)]
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions)),
    target_os = "windows",
    windows_subsystem = "windows"
)]
#[tauri::command]
async fn list_requests() -> String {
    let url = format!("http://127.0.0.1:8080/api/send");
    let res = reqwest::get(&url).await.unwrap().text().await.unwrap();
    return res
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, list_requests])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
